import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import Navbar from "@/components/Navbar";

const network = "mainnet-beta";
const endpoint = clusterApiUrl(network);
const wallets = [new PhantomWalletAdapter()];

export default function App({ Component, pageProps }) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="p-4 max-w-4xl mx-auto">
              <Component {...pageProps} />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
