import { Button, Spinner } from "@material-tailwind/react";
import { useState } from "react";

export const ConnectWalletButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulating connection process
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button
      className="w-72 rounded-full bg-gray-500 text-lg text-black font-normal normal-case py-3"
      size="lg"
      onClick={handleClick}
      disabled={isLoading}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {isLoading ? (
        <Spinner
          className="h-4 w-4"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};
