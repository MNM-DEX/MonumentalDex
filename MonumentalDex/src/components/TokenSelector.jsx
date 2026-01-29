// src/components/TokenSelector.jsx

const TOKENS = [
  {
    symbol: "MNM",
    name: "Monumental",
    logo: "https://via.placeholder.com/24x24.png?text=M"
  },
  {
    symbol: "NOVA",
    name: "Ethernova",
    logo: "https://via.placeholder.com/24x24.png?text=N"
  }
];

export default function TokenSelector({ selected, onSelect }) {
  const current = TOKENS.find(t => t.symbol === selected) || TOKENS[0];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        background: "#1a1c29",
        border: "1px solid #2a2d3f",
        cursor: "pointer",
        position: "relative"
      }}
    >
      <img
        src={current.logo}
        alt={current.symbol}
        style={{ width: 20, height: 20, borderRadius: "50%" }}
      />
      <span style={{ color: "#e6e8f0", fontWeight: 600, fontSize: 14 }}>
        {current.symbol}
      </span>
      <span style={{ color: "#9aa0b8", fontSize: 11 }}>▼</span>

      <div
        className="token-selector-menu"
        style={{
          position: "absolute",
          top: "110%",
          left: 0,
          background: "#0b0d17",
          borderRadius: 12,
          border: "1px solid #2a2d3f",
          padding: 6,
          minWidth: 140,
          boxShadow: "0 8px 20px rgba(0,0,0,0.45)",
          display: "none"
        }}
      >
        {TOKENS.map(token => (
          <div
            key={token.symbol}
            onClick={() => onSelect(token.symbol)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 8px",
              borderRadius: 8,
              cursor: "pointer",
              color: "#e6e8f0",
              fontSize: 13
            }}
          >
            <img
              src={token.logo}
              alt={token.symbol}
              style={{ width: 18, height: 18, borderRadius: "50%" }}
            />
            <span>{token.symbol}</span>
            <span style={{ color: "#9aa0b8", fontSize: 11 }}>
              {token.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}