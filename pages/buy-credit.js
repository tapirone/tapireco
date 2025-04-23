// pages/buy-credit.js
import Head from 'next/head';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { useState } from 'react';

const RECEIVER = new PublicKey('AJ9WLioTe9QAHKjwpvcq1YRqr2uBz45EU9Ve8mZbR36d');
const API_BASE = 'http://167.71.160.224:3002';

const creditPackages = [
  { sol: 0.01, credits: 20 },
  { sol: 0.025, credits: 50 },
  { sol: 0.05, credits: 100 },
];

export default function BuyCredit() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [txSig, setTxSig] = useState(null);

  const handleBuy = async (pkg) => {
    if (!publicKey) return alert('Connect wallet first');

    try {
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: RECEIVER,
          lamports: pkg.sol * 1e9,
        })
      );

      const signature = await sendTransaction(tx, connection);
      setTxSig(signature);

      await fetch(`${API_BASE}/api/credit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wallet: publicKey.toBase58(),
          credit: pkg.credits,
        }),
      });
    } catch (err) {
      alert('Transaction failed: ' + err.message);
    }
  };

  return (
    <>
      <Head><title>Buy Credit | Tapir Ecosystem</title></Head>
      <main className="min-h-screen bg-zinc-950 text-white p-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">💎 Buy Tapir Credits</h1>

        <div className="flex justify-center mb-6">
          <WalletMultiButton className="!bg-yellow-400 hover:!bg-yellow-300 text-black font-semibold px-4 py-2 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {creditPackages.map((pkg, i) => (
            <div key={i} className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center">
              <h2 className="text-xl font-bold text-yellow-300 mb-2">{pkg.credits} Credits</h2>
              <p className="text-gray-400 mb-4">{pkg.sol} SOL</p>
              <button
                onClick={() => handleBuy(pkg)}
                className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded font-semibold"
              >
                Buy Now
              </button>
              <p className="text-xs text-gray-400 mt-2">(ALPIR coming soon)</p>
            </div>
          ))}
        </div>

        {txSig && (
          <div className="text-center mt-6">
            <p className="text-green-400">✅ Payment sent!</p>
            <a
              href={`https://solscan.io/tx/${txSig}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              View on Solscan
            </a>
          </div>
        )}

        {!txSig && (
          <div className="text-center mt-8">
            <Link
              href="/"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-2 rounded-full inline-block"
            >
              ⬅ Back to Home
            </Link>
          </div>
        )}
      </main>
    </>
  );
}

