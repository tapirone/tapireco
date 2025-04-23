// pages/draw.js
export default function DrawPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400 mb-6">🎨 Tapir Draw</h1>
        <p className="text-zinc-300 text-lg mb-8">
          Create stunning images using just your imagination.
          Type your prompt. Get AI magic. Simple.
        </p>

        <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-2xl">
          <h2 className="text-2xl text-yellow-400 font-semibold mb-4 animate-pulse">🚧 Coming Soon</h2>
          <p className="text-zinc-400 text-md">
            Tapir Draw will let you turn words into art.
            Powered by cutting-edge image generation AI like DALL·E, you’ll be able to craft unique visuals with a single prompt.
            <br /><br />
            💡 Use your imagination. Bring your ideas to life.
            <br />
            🪙 Pay with SOL or ALPIR. 1 credit = 1 image.
            <br />
            📦 Perfect for memes, NFTs, or just fun.
          </p>
        </div>

        <p className="text-sm text-zinc-500 mt-8 italic">
          Launching in Q3 2025 — Credit system ready. Tapir AI coming for your prompts soon ✨
        </p>
      </div>
    </div>
  );
}
