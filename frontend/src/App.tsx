import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Receive from "./pages/Receive";
import Public from "./pages/Public";
import Private from "./pages/Private";
import HomeLayout from "./layouts/HomeLayout";
import OnboardingPublic from "./pages/OnboardingPublic";
import OnboardingPrivate from "./pages/OnboardingPrivate";

function App() {
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
