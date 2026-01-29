// src/components/SwapBox.jsx
import { useState } from "react";

export default function SwapBox() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  return (
    <div
      style={{
        background: "#0b0d17",
        padding: "28px",
        borderRadius: "16px",
        boxShadow: "0 0 25px rgba(0,0,0,0.35)",
        border: "1px solid #1a1c29",
        marginTop: "20px"
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "18px",
          fontSize: "22px",
          fontWeight: 700,
          color: "#e6e8f0"
        }}
      >
        Swap
      </h2>

      {/* From */}
      <div style={{ marginBottom: "18px" }}>
        <label style={{ color: "#9aa0b8", fontSize: 14 }}>From</label>
        <input
          type="number"
          value={fromAmount}
          onChange={(e) => setFromAmount(e.target.value)}
          placeholder="0.0"
          style={{
            width: "100%",
            marginTop: "6px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #2a2d3f",
            background: "#141622",
            color: "#fff",
            fontSize: "16px"
          }}
        />
      </div>

      {/* To */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ color: "#9aa0b8", fontSize: 14 }}>To</label>
        <input
          type="number"
          value={toAmount}
          onChange={(e) => setToAmount(e.target.value)}
          placeholder="0.0"
          style={{
            width: "100%",
            marginTop: "6px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #2a2d3f",
            background: "#141622",
            color: "#fff",
            fontSize: "16px"
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          background: "#5b4bff",
          border: "none",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 0 12px rgba(91,75,255,0.35)"
        }}
      >
        Swap
      </button>
    </div>
  );
}