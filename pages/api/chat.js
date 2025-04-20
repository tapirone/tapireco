export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Tapir Alpha, a funny and helpful AI tapir that chats with humans using playful, short, positive answers.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    console.log("🔥 OpenAI raw response:", data); // DEBUG LOG

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      console.error("❌ No valid reply:", data);
      return res.status(500).json({ error: "No reply from Tapir AI" });
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error("🧨 OpenAI error:", err);
    res.status(500).json({ error: "Error fetching from OpenAI" });
  }
}
