import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white min-h-screen bg-black flex flex-col items-center justify-center text-center space-y-6 p-6">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
        🦝 Welcome to Tapir Ecosystem
      </h1>
      <p className="max-w-md text-gray-400">
        Explore our AI Chat, Tapir Draw, and NFT collection powered by ALPIR Token. Join the revolution!
      </p>
      <div className="flex gap-4">
        <Link
          href="/chat"
          className="px-6 py-3 bg-pink-600 rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          💬 Start Chatting
        </Link>
        <Link
          href="/subscribe"
          className="px-6 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-400 transition"
        >
          💎 Subscribe
        </Link>
      </div>
    </div>
  );
}
