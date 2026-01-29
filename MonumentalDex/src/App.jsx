// src/App.jsx
import { useState } from "react";
import SwapBox from "./components/SwapBox";
import LiquidityBox from "./components/LiquidityBox";
import StakingDashboard from "./components/StakingDashboard";
import Navbar from "./components/Navbar";

function App() {
  const [tab, setTab] = useState("swap");

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "120px 24px 24px", // top padding for fixed navbar
        color: "#fff",
        background: "#050816",
        minHeight: "100vh"
      }}
    >
      {/* Fixed Navbar */}
      <Navbar currentTab={tab} setTab={setTab} />

      {/* Page Modules */}
      {tab === "swap" && <SwapBox />}
      {tab === "liquidity" && <LiquidityBox />}
      {tab === "staking" && <StakingDashboard />}
    </div>
  );
}

export default App;