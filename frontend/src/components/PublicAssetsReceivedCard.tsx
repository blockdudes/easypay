import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { assetsRecievedImageTransitions } from "../transitions/transitions";

export const PublicAssetsReceivedCard = () => {
  return (
    <Card
      className="w-full h-full shadow-2xl border-[1px] border-app-gray bg-public-gradient bg-cover p-8"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-[150px] -translate-x-[25px]">
          <motion.div
            transition={{ duration: 0.5 }}
            key="public-assets-received-image"
            initial="initial"
            animate="in"
            exit="out"
            variants={assetsRecievedImageTransitions}
          >
            <img
              src="/public-model.png"
              alt="public-model"
              className="h-[330px] w-[200px]"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[360px] w-[275px] flex flex-col justify-center items-center">
        <Typography
          variant="h1"
          color="black"
          className="text-5xl leading-[1.15]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Public Assets Received
        </Typography>
      </div>
      <Card
        className="w-full h-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex-1 flex justify-between items-center pl-12 pr-40">
          <div className="flex flex-col justify-center items-center gap-2 text-black">
            <div className="text-base flex flex-col justify-center items-start">
              Public
              <div className="text-5xl font-semibold">$70k</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 text-black">
            <div className="text-base flex flex-col justify-center items-start">
              Total
              <div className="text-5xl font-semibold">$150k</div>
            </div>
          </div>
        </div>
      </Card>
    </Card>
  );
};
