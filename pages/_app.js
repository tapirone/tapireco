// pages/_app.js
import '@/styles/globals.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // ✅ Import langsung

import Navbar from '@/components/Navbar';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from '@solana/wallet-adapter-wallets';

const network = WalletAdapterNetwork.Mainnet;
const endpoint = 'https://autumn-crimson-bridge.solana-mainnet.quiknode.pro/531d45624fd94d1da6917dbe5028851724233170/';
const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

export default function App({ Component, pageProps }) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Navbar />
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
