import { useState } from "react";
import TokenSelector from "./TokenSelector";

export default function SwapBox() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("MNM");
  const [toToken, setToToken] = useState("NOVA");

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
        Swap
      </h2>

      {/* From */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6
          }}
        >
          <span style={{ color: "#9aa0b8", fontSize: 13 }}>From</span>
          <TokenSelector selected={fromToken} onSelect={setFromToken} />
        </div>
        <input
          type="number"
          value={fromAmount}
          onChange={(e) => setFromAmount(e.target.value)}
          placeholder="0.0"
          style={{
            width: "100%",
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

      {/* To */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6
          }}
        >
          <span style={{ color: "#9aa0b8", fontSize: 13 }}>To</span>
          <TokenSelector selected={toToken} onSelect={setToToken} />
        </div>
        <input
          type="number"
          value={toAmount}
          onChange={(e) => setToAmount(e.target.value)}
          placeholder="0.0"
          style={{
            width: "100%",
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
        Swap
      </button>
    </div>
  );
}