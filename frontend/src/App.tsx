import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "./pages/Hero";
import Receive from "./pages/Receive";
import Public from "./pages/Public";
import Private from "./pages/Private";
import OnboardingPublic from "./pages/OnboardingPublic";
import OnboardingPrivate from "./pages/OnboardingPrivate";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";

import { connectWallet } from "./app/features/connectWalletSlice";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/public" element={<Public />} />
        <Route path="/private" element={<Private />} />
        <Route path="/onboarding">
          <Route path="/onboarding/public" element={<OnboardingPublic />} />
          <Route path="/onboarding/private" element={<OnboardingPrivate />} />
        </Route>
        <Route path="/private/receive/:address" element={<Receive />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const dispatch = useAppDispatch();
  const connectionStatus = useActiveWalletConnectionStatus();

  useEffect(() => {
    if (connectionStatus === "connected") {
      console.log("connected");
      dispatch(connectWallet());
    } else {
      console.log("not connected");
    }
  }, [connectionStatus]);

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;


// factory arbitrum sepolia: 0x3558C2D26A26D1aeAbA39503017137D8DEBb9337
// factory sepolia: 0x9769c95e46681a9BF9A6Bfa303bef1B04C636e1D