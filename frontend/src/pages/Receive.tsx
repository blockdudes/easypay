import { MakeTransactionCard } from "../components/MakeTransactionCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { NextStepButton } from "../components/NextStepButton";

const Receive = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleMakeTransaction = () => {
    setIsLoading(true);
    // Simulating payment process
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="h-20" />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MakeTransactionCard />
      </motion.div>
      <NextStepButton
        handleNextStep={handleMakeTransaction}
        isLoading={isLoading}
        label="Make Transaction"
      />
    </div>
  );
};

export default Receive;
