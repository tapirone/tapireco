// pages/draw.js
import DefaultLayout from '@/layout/Default';
import { useState } from 'react';

export default function DrawPage() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setImage('/tapirboy1.png'); // dummy image placeholder
      setLoading(false);
    }, 1200);
  };

  return (
    <DefaultLayout title="Draw">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">🎨 Tapir Draw</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Type your image prompt..."
            className="flex-1 px-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700"
          />
          <button
            onClick={handleGenerate}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded"
          >
            Generate
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-400">🌀 Drawing your tapir magic...</p>
        )}

        {image && !loading && (
          <div className="text-center mt-6">
            <img
              src={image}
              alt="Generated Tapir"
              className="w-full max-w-sm mx-auto rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
