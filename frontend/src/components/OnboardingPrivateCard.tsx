import {
  Card,
  Typography,
  Button,
  Step,
  Stepper,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaSignature } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdDone } from "react-icons/md";

export const OnboardingPrivateCard = ({
  isLastStep,
  setIsLastStep,
}: {
  isLastStep: boolean;
  setIsLastStep: (value: boolean) => void;
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);

  return (
    <Card
      className="w-[810px] h-[540px] shadow-2xl border-[1px] border-app-gray bg-private-gradient bg-cover p-8"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-[180px]">
          <img
            src="/private-model.png"
            alt="private-model"
            className="h-[455px] w-[320px]"
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
          Private Profile...
        </Typography>
      </div>
      <Card
        className="w-full h-full py-5 px-10 flex flex-col justify-around items-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Stepper
          className="w-[500px]"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Step
            onClick={() => setActiveStep(0)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <FaSignature className="h-5 w-5" />
            <div className="absolute -bottom-[3.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Signature
              </Typography>
            </div>
          </Step>
          <Step
            onClick={() => setActiveStep(1)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <GrTransaction className="h-5 w-5" />
            <div className="absolute -bottom-[3.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Transaction
              </Typography>
            </div>
          </Step>
          <Step
            onClick={() => setActiveStep(2)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <MdDone className="h-5 w-5" />
            <div className="absolute -bottom-[3.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Completed
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-20 flex justify-between">
          <Button
            className="w-48"
            size="lg"
            onClick={handleNext}
            disabled={isLastStep}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Sign
          </Button>
        </div>
      </Card>
    </Card>
  );
};
