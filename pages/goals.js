// pages/goals.js
export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">🎯 Tapir Ecosystem Goals</h1>
        <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
          Alpha Tapir is more than a meme — it's a movement.
          We're building a full-stack Solana-based ecosystem combining AI, art, NFTs, DeFi, and gamification into one unforgettable experience.
        </p>

        <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-2xl text-left space-y-6">
          <GoalItem emoji="🧠" title="AI Power, for Everyone" desc="Tapir Chat brings personality to AI. Fun, useful, and even meme-worthy. Available for free, and fully unlocked for ALPIR holders." />
          <GoalItem emoji="🎨" title="From Prompt to Picture" desc="With Tapir Draw, anyone can create stunning visuals using just text. It's fast, easy, and totally FOMO-friendly." />
          <GoalItem emoji="🖼️" title="NFTs With Real Utility" desc="Stake Baby Tapirs. Earn TAPIRAI tokens. Evolve them into legendary forms. Every NFT will have a purpose in our games and AI." />
          <GoalItem emoji="🎮" title="Play-to-Evolve Gaming" desc="Raise your Tapir from child to God. Feed, bathe, talk — grow it with care. The first AI-integrated pet sim meets Solana." />
          <GoalItem emoji="🚀" title="FOMO Meets Function" desc="ALPIR and TAPIRAI aren't just tokens — they're access keys. Credits, perks, staking, and airdrops await holders." />
        </div>

        <p className="text-sm text-zinc-500 mt-10 italic">
          Everything connects. This is just the beginning. 🌐
        </p>
      </div>
    </div>
  );
}

function GoalItem({ emoji, title, desc }) {
  return (
    <div>
      <h3 className="text-xl text-yellow-400 font-bold">{emoji} {title}</h3>
      <p className="text-zinc-300 mt-1">{desc}</p>
    </div>
  );
}
