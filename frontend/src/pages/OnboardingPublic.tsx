import { OnboardingPublicCard } from "../components/OnboardingPublicCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NextStepButton } from "../components/NextStepButton";

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
      <NextStepButton handleNextStep={handleNextStep} isLoading={isLoading} />
    </div>
  );
};

export default OnboardingPublic;
