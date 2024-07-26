import { Card, Typography, Input } from "@material-tailwind/react";
import { useState } from "react";

export const OnboardingPublicCard = () => {
  const [chain, setChain] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [address, setAddress] = useState<string>("");

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
