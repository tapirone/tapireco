import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white space-y-12 bg-gradient-to-tr from-gray-950 via-black to-gray-900 min-h-screen px-4 pt-10 pb-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 mb-6">
          🦝 Tapir Ecosystem
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          AI-powered Meme Utility Project on Solana — featuring Chat, Image Generator & Tapir NFTs.
        </p>
        <div className="mt-6">
          <a
            href="https://alpirtapir-website.vercel.app"
            target="_blank"
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 rounded-full text-gray-900 font-semibold shadow-lg"
          >
            🚀 Join ALPIR Presale Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border border-pink-500 shadow-md hover:scale-105 transition">
              <Image
                src={`/tapirboy${num}.png`}
                alt={`Tapir ${num}`}
                width={512}
                height={512}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AI Chat */}
        <FeatureCard
          title="AI Chat Tapir"
          emoji="🧠"
          description="Chat with our sassy, smart tapir powered by GPT."
          href="/chat"
          active
        />

        {/* Draw Image */}
        <FeatureCard
          title="Tapir Draw"
          emoji="🎨"
          description="Generate unique Tapir images using AI."
          href="/draw"
          active={false}
        />

        {/* NFT */}
        <FeatureCard
          title="NFT Baby Tapir"
          emoji="🖼️"
          description="Collection of Tapir NFTs launching Q1 2027."
          href="/nft"
          active={false}
        />
      </section>

      {/* Footer Social */}
      <footer className="text-center pt-12 pb-4 text-sm text-gray-500">
        Follow us:
        <a
          href="https://x.com/tapirmeme"
          target="_blank"
          className="underline hover:text-pink-400 mx-2"
        >
          Twitter
        </a>
        |
        <a
          href="https://t.me/tapirmeme"
          target="_blank"
          className="underline hover:text-pink-400 mx-2"
        >
          Telegram
        </a>
      </footer>
    </div>
  );
}

function FeatureCard({ title, emoji, description, href, active }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border-2 transition-all duration-200 ${
        active
          ? "border-pink-500 hover:border-pink-400"
          : "border-gray-700 opacity-50"
      } bg-gradient-to-br from-gray-800 to-gray-900`}
    >
      <h2 className="text-xl font-semibold mb-2 text-pink-300">
        {emoji} {title}
      </h2>
      <p className="text-sm text-gray-300 mb-4 min-h-[48px]">{description}</p>
      {active ? (
        <Link
          href={href}
          className="inline-block mt-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded text-white text-sm shadow"
        >
          Try Now
        </Link>
      ) : (
        <span className="inline-block mt-2 px-4 py-2 bg-gray-700 rounded text-gray-400 text-sm cursor-not-allowed">
          Coming Soon
        </span>
      )}
    </div>
  );
}
