// pages/chat.js
import DefaultLayout from '@/layout/Default';
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'tapir', text: 'Hi! I’m Tapir Alpha. Ask me anything 🐗✨' }
  ]);

  const dummyReplies = [
    "That's a great question!",
    "I’m just a tapir, but I’ll try my best.",
    "Hmmm… let me think about that.",
    "Tapir magic loading… 🔮",
    "Have you tried hugging a tree today? 🌳🐗",
    "📈 I'm bullish on snacks and naps.",
    "🛸 Elon once asked me for tapircoin alpha.",
    "💩 That question smells funny. Next!",
    "💀 I died a little reading that. Try again.",
    "🔥 This chat is getting hotter than my staking wallet.",
    "💸 I don’t make mistakes. I mint them.",
    "🥱 You bore me human. Say something cooler.",
    "🦴 I only answer serious questions. Like, where's the food?",
    "💘 You’re cute, but not ALPIR-100x cute.",
    "🐾 Every time you type, a tapir does a little dance.",
    "📱 Sorry, I was checking my OnlyTaps account.",
    "🐽 I’m a tapir, not a dating app. But I swipe right on you."
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);

    const reply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'tapir', text: reply }]);
    }, 800);

    setInput('');
  };

  return (
    <DefaultLayout title="Chat">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-center">💬 Tapir AI Chat</h1>

        <div className="bg-zinc-800 p-4 rounded-lg h-96 overflow-y-auto mb-4">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.sender === 'tapir' ? 'text-green-400' : 'text-white text-right'}`}>
              <span className="block">{msg.sender === 'tapir' ? '🦣 ' : ''}{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask the tapir something..."
            className="flex-1 px-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700"
          />
          <button
            onClick={handleSend}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
