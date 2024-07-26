import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Receive from "./pages/Receive";
import Public from "./pages/Public";
import Private from "./pages/Private";
import OnboardingPublic from "./pages/OnboardingPublic";
import OnboardingPrivate from "./pages/OnboardingPrivate";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/public" replace />} />
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
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
