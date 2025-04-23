// pages/roadmap.js
import DefaultLayout from '@/layout/Default';

export default function RoadmapPage() {
  return (
    <DefaultLayout title="Roadmap">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">📍 Tapir Ecosystem Roadmap</h1>
        <ul className="space-y-6 text-lg text-gray-300">
          <li>
            <span className="font-bold text-yellow-300">Q2 2025:</span> Launch ALPIR Token Presale
          </li>
          <li>
            <span className="font-bold text-yellow-300">Q3 2025:</span> Launch Tapir Draw, list ALPIR on DEX
          </li>
          <li>
            <span className="font-bold text-yellow-300">Q4 2025:</span> Release Tapir Games & Tapirai Token (AI Utility Token)
          </li>
          <li>
            <span className="font-bold text-yellow-300">2026:</span> Launch 888 Special NFT Collection (exclusive to ALPIR + TapirAI holders)
          </li>
          <li>
            <span className="font-bold text-yellow-300">2027:</span> Release Tapir GOD experience — full ecosystem merge
          </li>
        </ul>
      </div>
    </DefaultLayout>
  );
}
