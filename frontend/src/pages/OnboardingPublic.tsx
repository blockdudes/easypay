import { OnboardingPublicCard } from "../components/OnboardingPublicCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NextStepButton } from "../components/NextStepButton";
import {
  getContract,
  prepareContractCall,
  sendAndConfirmTransaction,
} from "thirdweb";
import { Chain, sepolia } from "thirdweb/chains";
import {
  useActiveAccount,
  useSwitchActiveWalletChain,
  useActiveWalletConnectionStatus,
  useActiveWalletChain,
} from "thirdweb/react";
import { assetReceiverFactoryAbi } from "../abis/assetReceiverFactoryAbi";
import { connectWallet } from "../app/features/connectWalletSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

import { chainIdToAddressMap } from "../utils/constant";

import { ethers } from "ethers";
import toast from "react-hot-toast";

const OnboardingPublic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { client } = useAppSelector((state) => state.thirdWeb);
  const dispatch = useAppDispatch();
  const account = useActiveAccount();
  const [chain, setChain] = useState<Chain>(sepolia);
  const [token, setToken] = useState<string>(
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  );

  const switchChain = useSwitchActiveWalletChain();
  const currentChain = useActiveWalletChain();

  const setup = async (token: string, chain: Chain) => {
    if (currentChain?.id !== chain.id) {
      await switchChain(chain);
    }
    try {
      const assetReceiverFactoryContractAddress = chainIdToAddressMap.get(
        chain.id
      );
      if (assetReceiverFactoryContractAddress) {
        console.log(assetReceiverFactoryContractAddress);
        const assetReceiverFactoryContract = getContract({
          address: assetReceiverFactoryContractAddress,
          abi: assetReceiverFactoryAbi as any,
          client: client,
          chain: chain,
        });

        // let salt = account?.address;
        if (account?.address) {
          // if (salt.startsWith("0x")) {
          //   salt = salt.slice(2).concat("123456789012");
          // }
          let salt = ethers.utils.hexZeroPad(
            ethers.utils.keccak256(
              ethers.utils.toUtf8Bytes(account?.address.concat("786"))
            ),
            32
          );
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

          const result =
            account &&
            (await sendAndConfirmTransaction({
              transaction: tx,
              account: account,
            }));
          console.log(result);
        }
      }
      toast.success("Public profile setup successful");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message ?? "Something went wrong");
      throw error;
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
    setup(token, chain)
      .then(() => {
        navigate("/onboarding/private");
      })
      .finally(() => {
        setIsLoading(false);
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
