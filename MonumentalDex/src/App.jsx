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
        maxWidth: "100%",
        margin: "0 auto",
        padding: "110px 16px 24px",
        color: "#fff",
        background: "#050816",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <Navbar currentTab={tab} setTab={setTab} />

      {tab === "swap" && <SwapBox />}
      {tab === "liquidity" && <LiquidityBox />}
      {tab === "staking" && <StakingDashboard />}
    </div>
  );
}

export default App;