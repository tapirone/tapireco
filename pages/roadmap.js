// pages/roadmap.js
export default function RoadmapPage() {
  const items = [
    { text: "Q2 2025 – ALPIR Presale", status: "done" },
    { text: "Q2 2025 – Tapir Chat AI , ALPIR on DEX", status: "done" },
    { text: "Q2 2025 – Buy Credits ( SOL or ALPIR) for Tapir Draw & Tapir Games", status: "done" },
    { text: "Q3 2025 – Tapir Draw AI (text-to-image generator, credits based)", status: "soon" },
    { text: "Q4 2025 – Tapir Games (pet simulation, Tapir evolve become God)", status: "soon" },
    { text: "Q4 2025 – NFT Staking System, Token TAPIRAI (Tapir AI NFT on DEX)", status: "soon" },
    { text: "2026 – Special 888 Tapir NFT (evolution series with AI) airdrop to ALPIR & TAPIRAI holders", status: "future" },
    { text: "2026 – DAO voting, meme launchpad & more", status: "future" },
  ];

  const getStyle = (status) => {
    switch (status) {
      case "done":
        return "text-green-400 before:content-['✅']";
      case "soon":
        return "text-yellow-400 before:content-['🔜'] animate-pulse";
      case "future":
        return "text-purple-400 before:content-['🔮']";
      default:
        return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">🗺️ Tapir Ecosystem Roadmap</h1>
        <p className="text-zinc-300 text-lg mb-10">
          Our journey from meme to utility — backed by tokens, NFTs, AI & pure tapir energy 🐾
        </p>
        <ul className="space-y-5 text-left text-lg md:text-xl font-semibold">
          {items.map((item, idx) => (
            <li key={idx} className={`${getStyle(item.status)} pl-2`}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
