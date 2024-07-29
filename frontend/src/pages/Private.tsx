import { PublicAddressCard } from "../components/PublicAddressCard";
import { PrivateUrlCard } from "../components/PrivateUrlCard";
import { TransactionDataTable } from "../components/TransactionDataTable";
import { Transaction } from "../types/types";
import { PrivateAssetsReceivedCard } from "../components/PrivateAssetsReceivedCard";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ethers } from "ethers";
import { transactionHistoryType } from "../types/types";
import { useState, useEffect } from "react";

const Public = () => {
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
  const { provider, signer, umbra, stealthKeyRegistry } = useAppSelector((state: RootState) => state.connectWallet);
  
  const scan = async () => {
    try {
      if (provider && signer && umbra && stealthKeyRegistry) {
        const { spendingKeyPair, viewingKeyPair } = await umbra.generatePrivateKeys(signer);
        const spendingPublicKey = spendingKeyPair.publicKeyHex;
        const viewingPrivateKey = viewingKeyPair.privateKeyHex;

        if (viewingPrivateKey) {
          const { userAnnouncements } = await umbra.scan(
            spendingPublicKey,
            viewingPrivateKey
          );
          console.log("userAnnouncements: ", userAnnouncements);

          let existingObjects: transactionHistoryType[] = JSON.parse(localStorage.getItem("scanPrivateData") || "[]");
          for (const tx of userAnnouncements) {
            const date = new Date(Number(tx.timestamp) * 1000).toLocaleDateString('en-GB');
            const check = existingObjects.find(obj => obj.txnhash === tx.txHash);
            if (!check) {
              existingObjects.unshift({
                sender: tx.from,
                chain: (await provider.getNetwork()).name,
                date: date,
                asset: tx.token === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" ? "ETH" : "TOKEN",
                amount: ethers.utils.formatUnits(tx.amount.toBigInt(), 18),
                txnhash: tx.txHash,
                iswithdrawn: tx.isWithdrawn,
                randomnumber: tx.randomNumber,
                receiver: tx.receiver,
                token: tx.token,
                type: "private"
              })
            }
          }
          localStorage.setItem("scanPrivateData", JSON.stringify(existingObjects));
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   scan();
  // }, [provider, signer, umbra, stealthKeyRegistry]);

  const handleWithdraw = (transaction: Transaction) => {
    console.log("Withdraw", transaction);
  };

  return (
    <div className="h-full w-full flex flex-col justify-start items-start py-6 px-24">
      <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4">
        <PrivateAssetsReceivedCard />
        <div className="grid grid-cols-1 grid-rows-2 gap-4">
          <PublicAddressCard />
          <PrivateUrlCard />
        </div>
        <div className="col-span-2">
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={scan}>Scan</button>
          </div>
          <TransactionDataTable
            headers={headers}
            transactions={JSON.parse(localStorage.getItem("scanPrivateData") || "[]")}
            onWithdraw={handleWithdraw}
          />
        </div>
      </div>
    </div>
  );
};

export default Public;
