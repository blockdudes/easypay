export type Transaction = {
  sender: string;
  chain: string;
  date: string;
  asset: string;
  amount: string;
  txnhash: string;
  type: "private" | "public";
};
