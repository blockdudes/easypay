import { Card, Typography, Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { prepareContractCall, sendTransaction, getContract } from "thirdweb";
import { assetReceiverFactoryAbi } from "../abis/assetReceiverFactoryAbi";
import { assetReceiverFactoryDeployTopic } from "../utils/constant";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { sepolia } from "thirdweb/chains";
import { useActiveAccount } from "thirdweb/react";

import { RootState } from "../app/store";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { connectWallet } from "../app/features/connectWalletSlice";

import { ethers } from "ethers";

export const OnboardingPublicCard = () => {
  const [chain, setChain] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { client } = useAppSelector((state) => state.thirdWeb);
  const dispatch = useAppDispatch();
  const account = useActiveAccount();

  const setup = async () => {
    try {
      const assetReceiverFactoryContract = getContract({
        address: assetReceiverFactoryDeployTopic,
        abi: assetReceiverFactoryAbi as any,
        client: client,
        chain: sepolia
      });

      let salt = ethers.utils.hexlify(ethers.utils.randomBytes(32));
      if (salt.startsWith("0x")) {
        salt = salt.slice(2);
      }
      console.log(salt);

      const tx = await prepareContractCall({
        contract: assetReceiverFactoryContract,
        method: "function deploy(bytes32 _salt, address token, uint256 chainId) public returns (address)",
        params: [`0x${salt}`, token, 11155111n],
        gas: BigInt(1000000),
      });

      console.log(tx);



      console.log(account);
      const result = account && (await sendTransaction({
        transaction: tx,
        account: account
      }));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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

  return (
    <Card
      className="w-[810px] h-[540px] shadow-2xl border-[1px] border-app-gray bg-public-gradient bg-cover p-8"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-[180px] -translate-x-[10px]">
          <img
            src="/public-model.png"
            alt="public-model"
            className="h-[470px] w-[300px]"
          />
        </div>
      </div>
      <div className="h-[700px] w-[275px] flex flex-col justify-end items-center pb-8">
        <Typography
          variant="h1"
          color="black"
          className="text-6xl leading-[1.15]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Public Profile...
        </Typography>
      </div>
      <Card
        className="w-full h-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="border">
        <ConnectWalletButton />
      </div>
        <button onClick={setup}>Click Me</button>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 justify-center items-center gap-x-5 gap-y-2 p-5">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="text-lg font-bold">Select Chain</div>
            <Input
              type="text"
              value={chain}
              labelProps={{
                className: "hidden",
              }}
              className="!border-app-gray"
              onChange={(e) => setChain(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="text-lg font-bold">Select Token</div>
            <Input
              type="text"
              value={token}
              labelProps={{
                className: "hidden",
              }}
              className="!border-app-gray"
              onChange={(e) => setToken(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center items-start gap-1">
            <div className="text-lg font-bold">Provide Account Address</div>
            <Input
              type="text"
              value={address}
              labelProps={{
                className: "hidden",
              }}
              className="!border-app-gray"
              onChange={(e) => setAddress(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </Card>
    </Card>
  );
};
