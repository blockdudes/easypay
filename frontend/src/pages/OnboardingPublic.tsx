import { OnboardingPublicCard } from "../components/OnboardingPublicCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NextStepButton } from "../components/NextStepButton";
import { getContract, prepareContractCall, sendTransaction } from "thirdweb";
import { Chain, sepolia } from "thirdweb/chains";
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import { assetReceiverFactoryAbi } from "../abis/assetReceiverFactoryAbi";
import { connectWallet } from "../app/features/connectWalletSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { assetReceiverFactoryDeployTopic } from "../utils/constant";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { ethers } from "ethers";

const OnboardingPublic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { client } = useAppSelector((state) => state.thirdWeb);
  const dispatch = useAppDispatch();
  const account = useActiveAccount();
  const [chain, setChain] = useState<Chain>(sepolia);
  const [token, setToken] = useState<string>("0xNATIVE");

  const setup = async (token: string, chain: Chain) => {
    try {
      const assetReceiverFactoryContract = getContract({
        address: assetReceiverFactoryDeployTopic,
        abi: assetReceiverFactoryAbi as any,
        client: client,
        chain: chain,
      });

      let salt = ethers.utils.hexlify(ethers.utils.randomBytes(32));
      if (salt.startsWith("0x")) {
        salt = salt.slice(2);
      }
      console.log(salt);

      const tx = prepareContractCall({
        contract: assetReceiverFactoryContract,
        method:
          "function deploy(bytes32 _salt, address token, uint256 chainId) public returns (address)",
        params: [`0x${salt}`, token, BigInt(chain.id)],
        gas: BigInt(1000000),
      });

      console.log(tx);

      console.log(account);
      const result =
        account &&
        (await sendTransaction({
          transaction: tx,
          account: account,
        }));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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

  const handleNextStep = () => {
    setIsLoading(true);
    setup(token, chain).then(() => {
      setIsLoading(false);
      navigate("/onboarding/private");
    });
  };

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="h-20">
        <div className="hidden">
          <ConnectWalletButton />
        </div>
      </div>
      <OnboardingPublicCard
        address={account?.address ?? ""}
        chain={chain}
        token={token}
        setChain={setChain}
        setToken={setToken}
      />
      <NextStepButton handleNextStep={handleNextStep} isLoading={isLoading} />
    </div>
  );
};

export default OnboardingPublic;
