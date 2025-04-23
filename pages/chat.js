import { useState } from "react";

const dummyResponses = [
  "Hi there hooman! 🐾",
  "Tapir say hello~ 🌿",
  "Do you bring snacks?",
  "Let’s go moon together 🚀",
  "Tapir tired... need nap",
  "I love mangoes. You too?",
  "I'm not a pig 😠 I'm Tapir.",
  "Hooman, pet me now!",
  "Alpha Tapir will rule the meme world 🧠",
  "Buy ALPIR or no cuddle 🥹",
  "Have you hugged your Tapir today?",
  "Tapir loves you 💛",
  "One SOL a day keeps the rug away",
  "Hold me like you hold your bags 💼",
  "What do you mean ‘sell’? NEVER!",
  "Let's play Tapir Draw together~ 🎨",
  "Soon you’ll stake me for TAPIRAI",
  "God Tapir will awaken in Q4 🛕",
  "No sleep, only alpha",
  "Tapir > Doge. Pass it on 🐗"
];

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "you", text: input };
    const randomReply = {
      sender: "tapir",
      text: dummyResponses[Math.floor(Math.random() * dummyResponses.length)],
    };

    setMessages([...messages, newUserMessage, randomReply]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 text-center">🧠 Chat with Tapir (Free Version)</h1>
        <p className="text-center text-zinc-400 mb-6">Talk to Tapir and get random silly responses.</p>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 h-[500px] overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-4 py-2 rounded-xl ${
                msg.sender === "you"
                  ? "bg-yellow-400 text-black self-end ml-auto text-right"
                  : "bg-zinc-800 text-zinc-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 bg-zinc-800 text-white border border-zinc-700 rounded-xl px-4 py-2 outline-none"
            placeholder="Say something to Tapir..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500"
            onClick={handleSend}
          >
            Send
          </button>
        </div>

        <p className="text-sm text-zinc-500 mt-4 text-center italic">
          Full AI chat unlocks with ALPIR soon. For now, enjoy free tapir wisdom 🐗✨
        </p>
      </div>
    </div>
  );
}
