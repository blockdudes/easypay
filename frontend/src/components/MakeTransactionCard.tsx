import { Card, Input } from "@material-tailwind/react";
import { useState } from "react";

export const MakeTransactionCard = ({ amount, token, setAmount, setToken }: { amount: string, token: string, setAmount: (e: string) => void, setToken: (e: string) => void }) => {
  
  return (
    <Card
      className="h-[495px] w-[810px] shadow-2xl border-[1px] border-app-gray bg-private-gradient bg-cover p-8"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-[185px] -translate-x-[5px]">
          <img
            src="/transaction-model.png"
            alt="transaction-model"
            className="h-[420px] w-[400px]"
          />
        </div>
      </div>
      <div className="h-[460px] w-36 text-6xl font-bold text-white flex flex-col justify-end pb-8">
        Make Transaction
      </div>
      <Card
        className="h-full w-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex-1 grid grid-cols-2 justify-center items-center p-8 gap-8">
          <div className="flex flex-col justify-center items-start">
            <div className="text-xl font-bold">Amount</div>
            <Input
              type="number"
              value={amount}
              labelProps={{
                className: "hidden",
              }}
              className="!border-app-gray"
              onChange={(e) => setAmount(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="text-xl font-bold">Token</div>
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
        </div>
      </Card>
    </Card>
  );
};
