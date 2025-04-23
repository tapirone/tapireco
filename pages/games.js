// pages/games.js
import DefaultLayout from '@/layout/Default';

export default function GamesPage() {
  return (
    <DefaultLayout title="Games">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎮 Tapir Games</h1>

        <p className="text-lg text-gray-300 mb-4">
          Two types of games are coming soon:
        </p>

        <div className="bg-zinc-800 p-6 rounded-xl mb-4 text-left">
          <h2 className="text-xl text-yellow-300 font-semibold mb-2">1. Tapir Mini-Games</h2>
          <p className="text-gray-400">Fast-paced fun games for entertainment and rewards.</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-xl text-left">
          <h2 className="text-xl text-yellow-300 font-semibold mb-2">2. Tapir Virtual Life</h2>
          <p className="text-gray-400">
            Raise your tapir from baby to legendary. Feed, clean, and dress it. The more you care,
            the faster it evolves!
          </p>
        </div>

        <p className="mt-6 text-gray-500">🚧 Games launching soon. Stay tuned!</p>
      </div>
    </DefaultLayout>
  );
}
