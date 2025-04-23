import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
        🦝 Welcome to Tapir Ecosystem
      </h1>
      <p className="text-gray-400 max-w-xl mb-6">
        Explore our AI Chat, Tapir Draw, and NFT collection powered by ALPIR Token. Join the revolution!
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/chat"
          className="px-6 py-3 bg-pink-600 rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          💬 Start Chatting
        </Link>
      </div>
    </div>
  );
}
