import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";


import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";

import { ConnectButton } from "thirdweb/react";

export const ConnectWalletButton = () => {
  const { client } = useAppSelector((state: RootState) => state.thirdWeb);
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: ["facebook", "google"],
      },
    }),
  ];


  
  return (
    // <Button
    //   className="w-72 rounded-full bg-gray-500 text-lg text-black font-normal normal-case py-3"
    //   size="lg"
    //   placeholder={undefined}
    //   onPointerEnterCapture={undefined}
    //   onPointerLeaveCapture={undefined}
    // >
    //   Connect Wallet
    // </Button>

    <ConnectButton
        client={client}
        wallets={wallets}
        theme={"light"}
        connectModal={{ size: "wide" }}
      />
  );
};
