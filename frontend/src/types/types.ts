import { ThirdwebClient } from "thirdweb";
import { ethers } from "ethers";
import { Umbra, StealthKeyRegistry } from "@umbracash/umbra-js"

export type Transaction = {
  sender: string;
  chain: string;
  date: string;
  asset: string;
  amount: string;
  txnhash: string;
  type: "private" | "public";
};

export interface transactionHistoryType {
  sender: string;
  chain: string;
  date: string;
  asset: string;
  amount: string;
  txnhash: string;
  iswithdrawn: boolean;
  randomnumber: string;
  receiver: string;
  token: string;
  type: "private" | "public";
} 


export interface ThirdwebState {
  client: ThirdwebClient;
  rpcRequest: any;
}

export interface ConnectWalletInterface {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.providers.JsonRpcSigner | null;
  address: string | null;
  umbra: Umbra | null;
  stealthKeyRegistry: StealthKeyRegistry | null;
  error: string | null;
  loading: boolean;
}