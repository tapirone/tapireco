import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 flex flex-col items-center text-center overflow-x-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 flex items-center gap-2">
        <span>🐗</span> Tapir Ecosystem
      </h1>

      <div className="w-[220px] h-[220px] relative mb-6">
        <Image
          src="/tapirboy1.png"
          alt="Tapir Mascot"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <p className="max-w-xl text-gray-300 mb-8">
        AI-powered meme utility project on Solana. Featuring Tapir AI Chat, Tapir Draw, and NFT Collection. Powered by ALPIR Token.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/chat">
          <span className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
            💬 Start Chat
          </span>
        </Link>
        <Link href="/buy-credit">
          <span className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
            💎 Buy Credit
          </span>
        </Link>
      </div>

      <Link href="/presale">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold shadow-lg mt-6 inline-block cursor-pointer">
          🚀 Join ALPIR Presale Now
        </span>
      </Link>
    </div>
  );
}
