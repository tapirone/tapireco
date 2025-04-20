import { useState, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tapirMessages") || "[]");
    const count = parseInt(localStorage.getItem("tapirChatCount") || "0");

    setMessages(stored.length ? stored : [{ role: "tapir", text: "Hello hooman 🐽!" }]);
    if (count >= 5) setLimitReached(true);
  }, []);

  const send = async () => {
    if (!input.trim() || limitReached) return;

    const newMsg = { role: "user", text: input };
    const updated = [...messages, newMsg];
    setMessages(updated);
    setInput("");

    const count = parseInt(localStorage.getItem("tapirChatCount") || "0") + 1;
    localStorage.setItem("tapirMessages", JSON.stringify(updated));
    localStorage.setItem("tapirChatCount", count);
    if (count >= 5) setLimitReached(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const { reply } = await res.json();
    setMessages((prev) => [...prev, { role: "tapir", text: reply || "😴" }]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4 text-white">
      <h1 className="text-3xl font-bold text-pink-400">🐽 Tapir AI Chat</h1>

      <div className="space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg ${m.role === "tapir" ? "bg-pink-800" : "bg-gray-700"}`}>
            <strong>{m.role === "tapir" ? "Tapir" : "You"}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 bg-gray-800 border border-gray-600 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={limitReached ? "Limit reached. Subscribe to continue!" : "Say hi to Tapir..."}
        />
        <button
          onClick={send}
          className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500 disabled:opacity-50"
          disabled={limitReached}
        >
          Send
        </button>
      </div>
    </div>
  );
}
