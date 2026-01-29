// src/lib/web3.js

// -------------------------------
// 1. Always select MetaMask provider
// -------------------------------
export function getProvider() {
  if (window.ethereum?.providers) {
    const metamask = window.ethereum.providers.find(p => p.isMetaMask);
    if (metamask) return metamask;
  }
  return window.ethereum;
}

// -------------------------------
// 2. NOVA network configuration
// -------------------------------
export const NOVA_PARAMS = {
  chainId: "0x1dab5", // 121525 in hex
  chainName: "Ethernova",
  nativeCurrency: {
    name: "NOVA",
    symbol: "NOVA",
    decimals: 18
  },
  rpcUrls: ["https://rpc.ethnova.net"],
  blockExplorerUrls: ["https://explorer.ethnova.net"]
};

// -------------------------------
// 3. Ensure wallet is on NOVA
// -------------------------------
export async function switchToNova(provider) {
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: NOVA_PARAMS.chainId }]
    });
  } catch (err) {
    // If chain is not added yet
    if (err.code === 4902) {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [NOVA_PARAMS]
      });
    } else {
      throw err;
    }
  }
}

// -------------------------------
// 4. Connect wallet + enforce NOVA
// -------------------------------
export async function connectWallet() {
  const provider = getProvider();

  if (!provider) {
    console.error("No provider found");
    return null;
  }

  try {
    // Request accounts
    const accounts = await provider.request({
      method: "eth_requestAccounts"
    });

    // Switch to NOVA
    await switchToNova(provider);

    return accounts[0] || null;
  } catch (err) {
    console.error("Wallet connection failed:", err);
    return null;
  }
}