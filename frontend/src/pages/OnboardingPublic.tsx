import { Button } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { OnboardingPublicCard } from "../components/OnboardingPublicCard";
import { useNavigate } from "react-router-dom";

const OnboardingPublic = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col justify-evenly items-center">
      <div className="h-20" />
      <OnboardingPublicCard />
      <Button
        className="w-72 rounded-full bg-gray-400 text-lg text-black font-thin normal-case py-2"
        size="lg"
        onClick={() => navigate("/onboarding/private", { replace: true })}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex justify-center items-center gap-1 translate-x-[15px]">
          Next Step
          <IoIosArrowRoundForward size={30} />
        </div>
      </Button>
    </div>
  );
};

export default OnboardingPublic;
