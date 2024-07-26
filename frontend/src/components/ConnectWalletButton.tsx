import { Button } from "@material-tailwind/react";

export const ConnectWalletButton = () => {
  return (
    <Button
      className="w-72 rounded-full bg-gray-500 text-lg text-black font-normal normal-case py-3"
      size="lg"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Connect Wallet
    </Button>
  );
};
