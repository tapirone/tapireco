import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function SubscribePage() {
  const { publicKey } = useWallet();
  const [selected, setSelected] = useState("sol");
  const devWallet = {
    sol: "5ra5JPQwtwS8kWxLgDxXZBeFWNJGppdLX4psjDygWD2n",
    alpir: "5ra5JPQwtwS8kWxLgDxXZBeFWNJGppdLX4psjDygWD2n",
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white space-y-6">
      <h1 className="text-3xl font-bold text-pink-400">💎 Subscribe to Tapir Premium</h1>

      <p>Choose your payment method:</p>

      <div className="flex gap-4">
        <button
          onClick={() => setSelected("sol")}
          className={`px-4 py-2 rounded ${selected === "sol" ? "bg-pink-600" : "bg-gray-700"}`}
        >
          Pay with SOL
        </button>
        <button
          onClick={() => setSelected("alpir")}
          className={`px-4 py-2 rounded ${selected === "alpir" ? "bg-pink-600" : "bg-gray-700"}`}
        >
          Pay with ALPIR
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <p className="mb-2 text-sm text-gray-400">Send 5 USD worth to:</p>
        <p className="font-mono text-green-400 break-all">{devWallet[selected]}</p>
      </div>

      {!publicKey && (
        <p className="text-yellow-400">⚠️ Please connect your wallet to proceed.</p>
      )}
    </div>
  );
}
