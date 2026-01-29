import { useState } from "react";

export default function StakingDashboard() {
  const [stakeAmount, setStakeAmount] = useState("");

  return (
    <div
      style={{
        background: "#0b0d17",
        padding: "22px",
        borderRadius: "16px",
        boxShadow: "0 0 25px rgba(0,0,0,0.35)",
        border: "1px solid #1a1c29",
        marginTop: "20px",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "16px",
          fontSize: 20,
          fontWeight: 700,
          color: "#e6e8f0"
        }}
      >
        Staking
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "#9aa0b8", fontSize: 13 }}>Amount to Stake</label>
        <input
          type="number"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          placeholder="0.0"
          style={{
            width: "100%",
            marginTop: "6px",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #2a2d3f",
            background: "#141622",
            color: "#fff",
            fontSize: 15,
            boxSizing: "border-box"
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          background: "#5b4bff",
          border: "none",
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 0 12px rgba(91,75,255,0.35)"
        }}
      >
        Stake
      </button>
    </div>
  );
}