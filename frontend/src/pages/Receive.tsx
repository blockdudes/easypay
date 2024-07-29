import { MakeTransactionCard } from "../components/MakeTransactionCard";
import { Button } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { ethers } from "ethers";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { connectWallet } from "../app/features/connectWalletSlice";

const Receive = () => {

  const [token, setToken] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { address } = useParams();
  const { provider, signer, umbra, stealthKeyRegistry } = useAppSelector((state: RootState) => state.connectWallet);
  console.log(provider, signer, umbra, stealthKeyRegistry);

  const wallet = useAppSelector(state => state.connectWallet);
  console.log(wallet) 

  const dispatch = useAppDispatch();
  const tokenObj = {
    "ETH": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    "USDC": "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    "USDT": "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    "DAI": "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
    "BTC": "0xb751EFd248Bf932A91d70f87abf031ceb1616F19",
  }

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
  }, [connectionStatus])

  const send = async () => {
    try {
      console.log(provider, signer, umbra, stealthKeyRegistry, amount, token, address);
      if (provider && signer && umbra && stealthKeyRegistry && amount && token && address) {
        const parsedAmount = ethers.utils.parseUnits(amount, 18);
        const result = await umbra.send(
          signer,
          tokenObj[token as keyof typeof tokenObj],
          parsedAmount,
          address,
        )
        console.log(result);
      } else {
        console.log("connect your wallet");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="border">
        <ConnectWalletButton />
      </div>
      <div className="h-20" />
      <MakeTransactionCard amount={amount} token={token} setAmount={setAmount} setToken={setToken} />
      <Button
        className="w-72 rounded-full bg-gray-400 text-lg text-black font-thin normal-case py-2"
        size="lg"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex justify-center items-center gap-1 translate-x-[15px]" onClick={send}>
          Make Payment
          <IoIosArrowRoundForward size={30} />
        </div>
      </Button>
    </div>
  );
};

export default Receive;
