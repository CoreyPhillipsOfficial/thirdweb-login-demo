import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider, lightTheme } from "@thirdweb-dev/react";

import "./index.css";
import App from "./App";

const CELO_MAINNET = {
  chainId: 42220,
  name: "Celo Mainnet",
  slug: "celo",
  nativeCurrency: { name: "Celo", symbol: "CELO", decimals: 18 },
  rpc: ["https://forno.celo.org"],
  explorers: [
    {
      name: "Celo Explorer",
      url: "https://explorer.celo.org",
      standard: "EIP3091",
    },
  ],
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThirdwebProvider
      theme={lightTheme()}
      activeChain={CELO_MAINNET}
      supportedChains={[CELO_MAINNET]}
      clientId="c93d40bcd55e35ad79e6335f1c72ea58"
    >
      <App />
    </ThirdwebProvider>
  </StrictMode>,
);
