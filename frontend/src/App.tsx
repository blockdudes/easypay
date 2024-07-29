import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Receive from "./pages/Receive";
import Public from "./pages/Public";
import Private from "./pages/Private";
import HomeLayout from "./layouts/HomeLayout";
import OnboardingPublic from "./pages/OnboardingPublic";
import OnboardingPrivate from "./pages/OnboardingPrivate";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { ethers } from "ethers";
// import { sepolia } from "wagmi/chains"
// import { numberToHex } from "viem";
// import { Umbra, StealthKeyRegistry } from "@umbracash/umbra-js"
// import { useActiveAccount } from "thirdweb/react";
// import {useConnectionStatus} from "@thirdweb-dev/react";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { connectWallet } from "./app/features/connectWalletSlice";

function App() {
  const dispatch = useAppDispatch();
  const thirdweb = useAppSelector((state: RootState) => state.thirdWeb);
  const wallet = useAppSelector((state: RootState) => state.connectWallet);


  // const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

  // console.log(process.env.SEPOLIA_RPC_URL);
  // console.log(provider);

  const connectionStatus = useActiveWalletConnectionStatus();

  useEffect(() => {
    console.log(connectionStatus);

    if(connectionStatus === "connected") {
      console.log("connected");
      dispatch(connectWallet());
    } else {
      console.log("not connected");
    }
  }, [connectionStatus]);




  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Navigate to="/public" replace />} />
            <Route path="/public" element={<Public />} />
            <Route path="/private" element={<Private />} />
          </Route>
          <Route path="/onboarding">
            <Route path="/onboarding/public" element={<OnboardingPublic />} />
            <Route path="/onboarding/private" element={<OnboardingPrivate />} />
          </Route>
          <Route path="/private/receive/:address" element={<Receive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
