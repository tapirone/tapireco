import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex flex-col items-center justify-center text-center space-y-8 px-6 py-12">
      <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">
        🦝 Tapir Ecosystem
      </h1>

      <Image
        src="/tapirboy1.png"
        alt="Tapir NFT"
        width={256}
        height={256}
        className="rounded-xl border border-pink-500 shadow-lg"
      />

      <p className="max-w-md text-gray-300 text-lg">
        AI-powered meme utility project on Solana. Featuring Tapir AI Chat, Tapir Draw, and NFT Collection. Powered by ALPIR Token.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/chat"
          className="px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition shadow"
        >
          💬 Start Chat
        </Link>
        <Link
          href="/subscribe"
          className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded-lg font-semibold transition shadow"
        >
          💎 Subscribe
        </Link>
      </div>

      {/* ✅ CTA PRESALE */}
      <div className="mt-10">
        <a
          href="https://alpirtapir-website.vercel.app"
          target="_blank"
          className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 rounded-full text-black font-bold shadow-lg text-lg"
        >
          🚀 Join ALPIR Presale Now
        </a>
      </div>

      <footer className="pt-12 text-sm text-gray-500">
        Follow us on
        <a
          href="https://x.com/tapirmeme"
          target="_blank"
          className="underline mx-1 hover:text-pink-400"
        >
          Twitter
        </a>
        |
        <a
          href="https://t.me/tapirmeme"
          target="_blank"
          className="underline mx-1 hover:text-pink-400"
        >
          Telegram
        </a>
      </footer>
    </div>
  );
}
