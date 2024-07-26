import { Card, Typography, Input } from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";

export const OnboardingPublicCard = () => {
  const [chain, setChain] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [errors, setErrors] = useState({
    chain: false,
    token: false,
    address: false,
  });

  const validateInput = (field: string, value: string) => {
    // Add your validation logic here
    setErrors((prev) => ({ ...prev, [field]: value.length === 0 }));
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 },
  };

  return (
    <Card
      className="w-[810px] h-[540px] shadow-2xl border-[1px] border-app-gray bg-public-gradient bg-cover p-8"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative">
        <motion.div className="absolute top-0 right-0 -translate-y-[180px] -translate-x-[10px]">
          <motion.img
            src="/public-model.png"
            alt="public-model"
            className="h-[470px] w-[300px]"
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              y: 0,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </div>
      <div className="h-[700px] w-[275px] flex flex-col justify-end items-center pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
      <Card
        className="w-full h-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex-1 grid grid-cols-2 grid-rows-2 justify-center items-center gap-x-5 gap-y-2 p-5">
          <motion.div
            className="flex flex-col justify-center items-start gap-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-lg font-bold">Select Chain</div>
            <motion.div className="w-full" animate={errors.chain ? shakeAnimation : {}}>
              <Input
                type="text"
                value={chain}
                labelProps={{
                  className: "hidden",
                }}
                className="!border-app-gray"
                onChange={(e) => {
                  setChain(e.target.value);
                  validateInput("chain", e.target.value);
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-start gap-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-lg font-bold">Select Token</div>
            <motion.div className="w-full" animate={errors.token ? shakeAnimation : {}}>
              <Input
                type="text"
                value={token}
                labelProps={{
                  className: "hidden",
                }}
                className="!border-app-gray"
                onChange={(e) => {
                  setToken(e.target.value);
                  validateInput("token", e.target.value);
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="col-span-2 flex flex-col justify-center items-start gap-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-lg font-bold">Provide Account Address</div>
            <motion.div className="w-full" animate={errors.address ? shakeAnimation : {}}>
              <Input
                type="text"
                value={address}
                labelProps={{
                  className: "hidden",
                }}
                className="!border-app-gray"
                onChange={(e) => {
                  setAddress(e.target.value);
                  validateInput("address", e.target.value);
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </Card>
  );
};
