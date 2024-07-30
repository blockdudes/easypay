import { MakeTransactionCard } from "../components/MakeTransactionCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { ethers } from "ethers";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { connectWallet } from "../app/features/connectWalletSlice";
import { motion } from "framer-motion";
import { NextStepButton } from "../components/NextStepButton";

const Receive = () => {
  const [token, setToken] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { address } = useParams();
  const { provider, signer, umbra, stealthKeyRegistry } = useAppSelector(
    (state: RootState) => state.connectWallet
  );
  console.log(provider, signer, umbra, stealthKeyRegistry);

  const wallet = useAppSelector((state) => state.connectWallet);
  console.log(wallet);

  const dispatch = useAppDispatch();
  const tokenObj = {
    ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    USDC: "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    USDT: "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    DAI: "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    BTC: "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
  };

  const connectionStatus = useActiveWalletConnectionStatus();
  useEffect(() => {
    console.log(connectionStatus);
    if (connectionStatus === "connected") {
      console.log("Recieve: connected");
      dispatch(connectWallet());
    } else {
      console.log("not connected");
      dispatch(connectWallet());
    }
  }, [connectionStatus]);

  const send = async () => {
    try {
      console.log(
        provider,
        signer,
        umbra,
        stealthKeyRegistry,
        amount,
        token,
        address
      );
      if (
        provider &&
        signer &&
        umbra &&
        stealthKeyRegistry &&
        amount &&
        token &&
        address
      ) {
        const parsedAmount = ethers.utils.parseUnits(amount, 18);
        const result = await umbra.send(
          signer,
          tokenObj[token as keyof typeof tokenObj],
          parsedAmount,
          address
        );
        console.log(result);
      } else {
        console.log("connect your wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleMakeTransaction = () => {
    setIsLoading(true);
    send().then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="w-full flex justify-end items-center px-10">
        <ConnectWalletButton />
      </div>
      <div className="h-20" />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MakeTransactionCard
          amount={amount}
          token={token}
          setAmount={setAmount}
          setToken={setToken}
        />
      </motion.div>
      <NextStepButton
        handleNextStep={handleMakeTransaction}
        isLoading={isLoading}
        label="Make Transaction"
      />
    </div>
  );
};

export default Receive;
