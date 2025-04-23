// pages/goals.js
import DefaultLayout from '@/layout/Default';

export default function GoalsPage() {
  return (
    <DefaultLayout title="Goals">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">🎯 Tapir Ecosystem Goals</h1>
        <ul className="space-y-6 text-lg text-gray-300">
          <li>
            <span className="font-bold text-yellow-300">💰 ALPIR as Payment:</span> ALPIR Token will be the main currency across all Tapir products — chat, image gen, NFTs, and games.
          </li>
          <li>
            <span className="font-bold text-yellow-300">🧠 Utility-First Meme:</span> Tapir ecosystem brings utility to memecoins — through AI, creativity, and gamified experience.
          </li>
          <li>
            <span className="font-bold text-yellow-300">🎁 888 Special NFTs:</span> The 888 Tapir NFTs will gain exclusive value as community grows. Starting from 10 SOL, can rise to 500 SOL.
          </li>
          <li>
            <span className="font-bold text-yellow-300">💎 Exclusive Airdrops:</span> Only ALPIR and TapirAI holders will get access to free 888 NFTs and token airdrops.
          </li>
          <li>
            <span className="font-bold text-yellow-300">🌍 Global Reach:</span> Our website and AI agent support English to reach worldwide degens.
          </li>
          <li>
            <span className="font-bold text-yellow-300">🤝 Community is Key:</span> The bigger the tribe, the rarer the rewards. Tapir is nothing without its herd 🐗❤️
          </li>
        </ul>
      </div>
    </DefaultLayout>
  );
}
