import { useEffect, useState } from 'react';
import { PublicKey, Connection, Transaction, SystemProgram } from '@solana/web3.js';

const END_DATE = new Date("2025-05-21T23:59:59Z").getTime();
const RECEIVER_WALLET = "5ra5JPQwtwS8kWxLgDxXZBeFWNJGppdLX4psjDygWD2n";
const RATE = 5000000;
const TARGET_SOL = 200;
const RPC = "https://autumn-crimson-bridge.solana-mainnet.quiknode.pro/531d45624fd94d1da6917dbe5028851724233170/";

export default function Presale() {
  const [wallet, setWallet] = useState(null);
  const [solAmount, setSolAmount] = useState(0);
  const [alpirAmount, setAlpirAmount] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});
  const [txHash, setTxHash] = useState(null);
  const [loading, setLoading] = useState(false);
  const [raised, setRaised] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = END_DATE - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchRaised = () => {
      fetch('http://167.71.160.224:3001/raised')
        .then(res => res.json())
        .then(data => {
          const val = parseFloat(data.total || data.raised);
          if (!isNaN(val)) setRaised(val);
        });
    };

    fetchRaised(); // initial
    const interval = setInterval(fetchRaised, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const connectWallet = async () => {
    if (window?.solana?.isPhantom) {
      try {
        const resp = await window.solana.connect();
        setWallet(resp.publicKey.toString());
      } catch (err) {
        console.error("Connection failed:", err);
      }
    } else {
      alert("Phantom Wallet not found");
    }
  };

  const disconnectWallet = () => setWallet(null);

  const handleBuy = async () => {
    if (!wallet || solAmount < 0.1 || solAmount > 5) return;
    try {
      setLoading(true);
      setTxHash(null);
      const provider = window.solana;
      const connection = new Connection(RPC);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet),
          toPubkey: new PublicKey(RECEIVER_WALLET),
          lamports: solAmount * 1e9
        })
      );
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = new PublicKey(wallet);
      const signed = await provider.signTransaction(transaction);
      const sig = await connection.sendRawTransaction(signed.serialize());
      setTxHash(sig);

      await fetch('http://167.71.160.224:3001/raised',/raised', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: solAmount })
      });

      await fetch('/api/claim-whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet })
      });

      setRaised(r => r + solAmount);
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 pt-28 pb-12 flex justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
          Join the presale now. All SOL raised goes directly to liquidity. No team tokens, no rug.
        </h1>

        <p className="text-center text-sm text-gray-400 mb-4">
          ⏳ Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>

        <p className="mb-2">📉 <strong>Rate:</strong> 1 SOL = 5,000,000 ALPIR</p>
        <p className="mb-4">💧 All presale proceeds go to liquidity</p>

        <input
          type="number"
          min="0.1"
          max="5"
          value={solAmount}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setSolAmount(val);
            setAlpirAmount(val * RATE);
          }}
          placeholder="Enter SOL (min 0.1 / max 5)"
          className="w-full p-3 mb-4 bg-zinc-800 rounded text-white"
        />

        <p className="mb-2">You&#39;ll receive: <strong>{alpirAmount}</strong> ALPIR</p>
        <p className="mb-4">{raised} / {TARGET_SOL} SOL Raised</p>

        {!wallet ? (
          <button
            onClick={connectWallet}
            className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 mb-4 w-full"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <button
              onClick={disconnectWallet}
              className="bg-gray-600 px-4 py-2 rounded text-white mb-2 w-full"
            >Disconnect</button>
            <button
              onClick={handleBuy}
              disabled={loading}
              className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-400 w-full"
            >
              {loading ? 'Processing...' : 'Buy Now'}
            </button>
          </>
        )}

        {txHash && (
          <p className="mt-4 text-green-400 text-sm text-center break-all">
            TX: <a
              href={`https://solscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View on Solscan
            </a>
          </p>
        )}

        <div className="mt-10 p-4 border-t border-gray-700">
          <h2 className="text-xl font-bold mb-2 text-green-400">🎁 Presale Perks</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
            <li>🎯 Airdrop: 100,000 coin Tapirai per 1 SOL (claim after launch)</li>
            <li>📜 Automatic whitelist for future token + NFT drops</li>
            <li>💰 Free access to premium Tapir features</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
