// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-10 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-400">Alpha Tapir Ecosystem</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-8">
          AI-powered tools, Solana NFTs, and meme token utilities — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/chat" className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-500 transition">
            Chat with Tapir
          </Link>
          <Link href="/draw" className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-500 hover:text-black transition">
            Tapir Draw
          </Link>
          <Link href="/nft" className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-500 hover:text-black transition">
            Tapir NFT
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">Why Alpha Tapir?</h2>
        <p className="text-zinc-300 text-md md:text-lg mb-6">
          This ecosystem combines powerful tools, NFTs with staking rewards, AI chat experiences,
          and meme-driven community energy. Built on Solana for speed and low fees.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="AI Chat"
          desc="Chat with Tapir using advanced LLMs. Free limited access or full unlock with ALPIR token."
        />
        <FeatureCard
          title="Tapir Draw"
          desc="Generate unique AI art with prompts. Pay-per-image using SOL."
        />
        <FeatureCard
          title="NFT Utility"
          desc="Own NFTs, stake them, and earn Tapirai tokens. Special 888 sets coming soon."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 hover:shadow-lg transition border border-zinc-700">
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
      <p className="text-zinc-300 text-sm">{desc}</p>
    </div>
  );
}
