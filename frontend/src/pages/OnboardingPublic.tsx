import { Button } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { OnboardingPublicCard } from "../components/OnboardingPublicCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const OnboardingPublic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/onboarding/private", { replace: true });
    }, 1000);
  };

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="h-20" />
      <OnboardingPublicCard />
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Button
          className="w-72 rounded-full bg-gray-400 text-lg text-black font-thin normal-case py-2"
          size="lg"
          onClick={handleNextStep}
          disabled={isLoading}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="flex justify-center items-center gap-1 translate-x-[15px]">
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              <>
                Next Step
                <IoIosArrowRoundForward size={30} />
              </>
            )}
          </div>
        </Button>
      </motion.div>
    </div>
  );
};

export default OnboardingPublic;
