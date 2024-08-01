import { PublicAssetsReceivedCard } from "../components/PublicAssetsReceivedCard";
import { PublicAddressCard } from "../components/PublicAddressCard";
import { PrivateUrlCard } from "../components/PrivateUrlCard";
import { TransactionDataTable } from "../components/TransactionDataTable";
import { transactionHistoryType } from "../types/types";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { homePageTransitions } from "../transitions/transitions";
import { useAppSelector } from "../app/hooks";

// import { PageTransition } from "../components/PageTransition";

const Public = () => {
  const publicOnBoardingTxData = useAppSelector(
    (state) => state.publicOnBoardingTx
  );
  console.log(
    "publicOnBoardingTxData.publicTransactionHistory",
    publicOnBoardingTxData.publicTransactionHistory
  );

  // publicOnBoardingTxData.

  const headers = [
    "S. No.",
    "Sender",
    "Date",
    "Chain",
    "Asset",
    "Amount",
    "Txn Hash",
  ];

  const dummyTransactions: transactionHistoryType[] =
    publicOnBoardingTxData.publicTransactionHistory || [];
  //   {
  //     sender: "0x8923hdibf8cwi392dbq9h2ewc892349d23e8w9",
  //     chain: "Ethereum",
  //     date: "2021-01-01",
  //     asset: "ETH",
  //     amount: "0.001",
  //     txnhash: "0x67f1t2yqdw98617dqwx78gf23dewgg8v7123vdqwx7c",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     chain: "Arbitrum",
  //     date: "2024-02-15",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0x0912qwbcws78g12dbqx782d3g87q71h83dec8jd20xh",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnw1qs93q67f3qwbewq823g6732dq9783",
  //     chain: "Polygon",
  //     date: "2024-02-05",
  //     asset: "MATIC",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x8923hdibf8cwi392dbq9h2ewc892349d23e8w9",
  //     chain: "Ethereum",
  //     date: "2021-01-01",
  //     asset: "ETH",
  //     amount: "0.001",
  //     txnhash: "0x67f1t2yqdw98617dqwx78gf23dewgg8v7123vdqwx7c",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     chain: "Arbitrum",
  //     date: "2024-02-15",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0x0912qwbcws78g12dbqx782d3g87q71h83dec8jd20xh",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnw1qs93q67f3qwbewq823g6732dq9783",
  //     chain: "Polygon",
  //     date: "2024-02-05",
  //     asset: "MATIC",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x8923hdibf8cwi392dbq9h2ewc892349d23e8w9",
  //     chain: "Ethereum",
  //     date: "2021-01-01",
  //     asset: "ETH",
  //     amount: "0.001",
  //     txnhash: "0x67f1t2yqdw98617dqwx78gf23dewgg8v7123vdqwx7c",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     chain: "Arbitrum",
  //     date: "2024-02-15",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0x0912qwbcws78g12dbqx782d3g87q71h83dec8jd20xh",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnw1qs93q67f3qwbewq823g6732dq9783",
  //     chain: "Polygon",
  //     date: "2024-02-05",
  //     asset: "MATIC",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x8923hdibf8cwi392dbq9h2ewc892349d23e8w9",
  //     chain: "Ethereum",
  //     date: "2021-01-01",
  //     asset: "ETH",
  //     amount: "0.001",
  //     txnhash: "0x67f1t2yqdw98617dqwx78gf23dewgg8v7123vdqwx7c",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     chain: "Arbitrum",
  //     date: "2024-02-15",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0x0912qwbcws78g12dbqx782d3g87q71h83dec8jd20xh",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnw1qs93q67f3qwbewq823g6732dq9783",
  //     chain: "Polygon",
  //     date: "2024-02-05",
  //     asset: "MATIC",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x8923hdibf8cwi392dbq9h2ewc892349d23e8w9",
  //     chain: "Ethereum",
  //     date: "2021-01-01",
  //     asset: "ETH",
  //     amount: "0.001",
  //     txnhash: "0x67f1t2yqdw98617dqwx78gf23dewgg8v7123vdqwx7c",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     chain: "Arbitrum",
  //     date: "2024-02-15",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0x0912qwbcws78g12dbqx782d3g87q71h83dec8jd20xh",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x9wqdihnw1qs93q67f3qwbewq823g6732dq9783",
  //     chain: "Polygon",
  //     date: "2024-02-05",
  //     asset: "MATIC",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "private",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  //   {
  //     sender: "0x78675rtvhyhw2edcscds12dxf23uidsgc23dw1",
  //     chain: "Ethereum",
  //     date: "2024-02-05",
  //     asset: "ETH",
  //     amount: "0.0234",
  //     txnhash: "0xg7823de84f3f8vf2dewjvsdhcxg239dwegc8923ewdg",
  //     type: "public",
  //     iswithdrawn: false,
  //     randomnumber: "123456",
  //     receiver: "0x9wqdihnwqs993q67f3qwbewq823g6732dq9783",
  //     token: "ETH",
  //   },
  // ];
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<transactionHistoryType[]>(
    []
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setTransactions(dummyTransactions);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      key="public"
      initial="initial"
      animate="in"
      exit="out"
      variants={homePageTransitions}
      custom={direction}
    >
      <Header isPublic={true} setDirection={setDirection} />
      <div className="h-[calc(100vh-96px)] w-full">
        <div className="h-full w-full flex flex-col justify-start items-start py-6 px-24">
          <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4">
            <PublicAssetsReceivedCard />
            <div className="grid grid-cols-1 grid-rows-2 gap-4">
              <PublicAddressCard />
              <PrivateUrlCard />
            </div>
            <div className="col-span-2">
              <TransactionDataTable
                headers={headers}
                transactions={transactions}
                isLoading={isLoading}
                isPrivate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Public;
