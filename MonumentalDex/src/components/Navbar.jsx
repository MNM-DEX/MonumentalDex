import { useState } from "react";
import { connectWallet } from "../lib/web3.js";
import Logo from "../assets/monumental-logo.png";

export default function Navbar({ currentTab, setTab }) {
  const [account, setAccount] = useState(null);

  async function handleConnect() {
    const acct = await connectWallet();
    if (acct) setAccount(acct);
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 14px",
        background: "#0b0d17",
        borderBottom: "1px solid #1a1c29",
        boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
        flexWrap: "wrap",
        gap: 10
      }}
    >
      {/* Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={Logo}
          alt="MonumentalDEX Logo"
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            objectFit: "cover",
            boxShadow: "0 0 10px rgba(255,255,255,0.15)"
          }}
        />
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: 0.6,
            color: "#e6e8f0"
          }}
        >
          MonumentalDEX
        </h1>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          paddingBottom: 4,
          flex: "1 1 auto",
          justifyContent: "center"
        }}
      >
        {["swap", "liquidity", "staking"].map((tab) => (
          <button
            key={tab}
            onClick={() => setTab(tab)}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "none",
              background: currentTab === tab ? "#5b4bff" : "transparent",
              color: currentTab === tab ? "#fff" : "#9aa0b8",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.2s",
              fontSize: 14,
              whiteSpace: "nowrap"
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Wallet Button */}
      <button
        onClick={handleConnect}
        style={{
          background: "#1a1c29",
          padding: "8px 14px",
          borderRadius: 10,
          fontSize: 13,
          cursor: "pointer",
          color: "#cfd2e3",
          fontWeight: 600,
          border: "1px solid #2a2d3f",
          transition: "0.2s",
          boxShadow: "0 0 10px rgba(91,75,255,0.25)",
          whiteSpace: "nowrap"
        }}
      >
        {account
          ? `${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect NOVA Wallet"}
      </button>
    </nav>
  );
}