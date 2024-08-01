import { ThirdwebClient } from "thirdweb";
import { ethers } from "ethers";
import { Umbra, StealthKeyRegistry } from "@umbracash/umbra-js";

export type Transaction = {
  sender: string;
  chain: string;
  date: string;
  asset: string;
  amount: string;
  txnhash: string;
  type: "private" | "public";
};

export type PublicTransactionHistory = {
  sender: string | null;
  chain: string | null;
  date: string | null;
  asset: string | null;
  amount: string | null;
  txnhash: string | null;
  type: "private" | "public";
};

export type transactionHistoryType = {
  sender: string | null;
  chain: string | null;
  date: string | null;
  asset: string |null;
  amount: string | null;
  txnhash: string | null;
  iswithdrawn: boolean | null;
  randomnumber: string | null;
  receiver: string | null;
  token: string | null;
  type: string | null;
};



export type ThirdwebState = {
  client: ThirdwebClient;
  rpcRequest: any;
};

export type ConnectWalletInterface = {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.providers.JsonRpcSigner | null;
  address: string | null;
  umbra: Umbra | null;
  stealthKeyRegistry: StealthKeyRegistry | null;
  error: string | null;
  loading: boolean;
};
