import { MakeTransactionCard } from "../components/MakeTransactionCard";
import { Button, Spinner } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const Receive = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleMakePayment = () => {
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
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className="w-72 rounded-full bg-gray-400 text-lg text-black font-thin normal-case py-2 hover:bg-gray-500 transition-colors duration-300"
          size="lg"
          onClick={handleMakePayment}
          disabled={isLoading}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="flex justify-center items-center gap-1 translate-x-[15px]">
            {isLoading ? (
              <Spinner
                className="h-6 w-6"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            ) : (
              <>
                Make Payment
                <IoIosArrowRoundForward size={30} />
              </>
            )}
          </div>
        </Button>
      </motion.div>
    </div>
  );
};

export default Receive;
