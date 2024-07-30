import { PublicAddressCard } from "../components/PublicAddressCard";
import { PrivateUrlCard } from "../components/PrivateUrlCard";
import { TransactionDataTable } from "../components/TransactionDataTable";
import { Transaction } from "../types/types";
import { PrivateAssetsReceivedCard } from "../components/PrivateAssetsReceivedCard";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ethers } from "ethers";
import { transactionHistoryType } from "../types/types";
import { useState } from "react";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { homePageTransitions } from "../transitions/transitions";
import { Button } from "@material-tailwind/react";

const Private = () => {
  const headers = [
    "S. No.",
    "Sender",
    "Date",
    "Chain",
    "Asset",
    "Amount",
    "Txn Hash",
    "",
  ];
  const { provider, signer, umbra, stealthKeyRegistry } = useAppSelector(
    (state: RootState) => state.connectWallet
  );
  const [direction, setDirection] = useState<string>("right");
  const [isLoading, setIsLoading] = useState(false);

  const scan = async () => {
    setIsLoading(true);
    try {
      if (provider && signer && umbra && stealthKeyRegistry) {
        const { spendingKeyPair, viewingKeyPair } =
          await umbra.generatePrivateKeys(signer);
        const spendingPublicKey = spendingKeyPair.publicKeyHex;
        const viewingPrivateKey = viewingKeyPair.privateKeyHex;

        if (viewingPrivateKey) {
          const { userAnnouncements } = await umbra.scan(
            spendingPublicKey,
            viewingPrivateKey
          );
          console.log("userAnnouncements: ", userAnnouncements);

          let existingObjects: transactionHistoryType[] = JSON.parse(
            localStorage.getItem("scanPrivateData") || "[]"
          );
          for (const tx of userAnnouncements) {
            const date = new Date(
              Number(tx.timestamp) * 1000
            ).toLocaleDateString("en-GB");
            const check = existingObjects.find(
              (obj) => obj.txnhash === tx.txHash
            );
            if (!check) {
              existingObjects.unshift({
                sender: tx.from,
                chain: (await provider.getNetwork()).name,
                date: date,
                asset:
                  tx.token === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                    ? "ETH"
                    : "TOKEN",
                amount: ethers.utils.formatUnits(tx.amount.toBigInt(), 18),
                txnhash: tx.txHash,
                iswithdrawn: tx.isWithdrawn,
                randomnumber: tx.randomNumber,
                receiver: tx.receiver,
                token: tx.token,
                type: "private",
              });
            }
          }
          localStorage.setItem(
            "scanPrivateData",
            JSON.stringify(existingObjects)
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   scan();
  // }, [provider, signer, umbra, stealthKeyRegistry]);

  const handleWithdraw = (transaction: Transaction) => {
    console.log("Withdraw", transaction);
  };

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      key="private"
      initial="initial"
      animate="in"
      exit="out"
      variants={homePageTransitions}
      custom={direction}
    >
      <Header isPublic={false} setDirection={setDirection} />
      <div className="h-[calc(100vh-96px)] w-full">
        <div className="h-full w-full flex flex-col justify-start items-start py-6 px-24">
          <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4">
            <PrivateAssetsReceivedCard />
            <div className="grid grid-cols-1 grid-rows-2 gap-4">
              <PublicAddressCard />
              <PrivateUrlCard />
            </div>
            <div className="col-span-2 relative">
              <div className="absolute top-6 right-6 z-10">
                <Button
                  variant="outlined"
                  color="brown"
                  onClick={scan}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Scan
                </Button>
              </div>
              <TransactionDataTable
                headers={headers}
                transactions={JSON.parse(
                  localStorage.getItem("scanPrivateData") || "[]"
                )}
                onWithdraw={handleWithdraw}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Private;
