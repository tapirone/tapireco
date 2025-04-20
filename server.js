const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const { Connection, PublicKey } = require("@solana/web3.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = new Connection("https://api.mainnet-beta.solana.com");
const DEV_WALLET = new PublicKey("5ra5JPQwtwS8kWxLgDxXZBeFWNJGppdLX4psjDygWD2n"); // ganti kalau perlu

const PREMIUM_FILE = "./premium.json";
if (!fs.existsSync(PREMIUM_FILE)) fs.writeFileSync(PREMIUM_FILE, "[]");

// Get current premium list
app.get("/premium", (req, res) => {
  const data = JSON.parse(fs.readFileSync(PREMIUM_FILE));
  res.json(data);
});

// Add wallet manually (optional use)
app.post("/add", (req, res) => {
  const { wallet } = req.body;
  const data = JSON.parse(fs.readFileSync(PREMIUM_FILE));
  if (!data.includes(wallet)) {
    data.push(wallet);
    fs.writeFileSync(PREMIUM_FILE, JSON.stringify(data, null, 2));
  }
  res.json({ success: true, added: wallet });
});

// Check if a wallet has paid to dev wallet
app.get("/check/:wallet", async (req, res) => {
  const userWallet = new PublicKey(req.params.wallet);
  const sigs = await connection.getSignaturesForAddress(DEV_WALLET, { limit: 30 });

  for (const sig of sigs) {
    const tx = await connection.getParsedTransaction(sig.signature, "confirmed");
    if (!tx) continue;

    const from = tx.transaction.message.accountKeys[0].pubkey.toString();
    if (from === userWallet.toString()) {
      const amount = tx.meta?.postBalances?.[1] - tx.meta?.preBalances?.[1];
      if (amount && amount >= 5000000) { // ~0.005 SOL minimum
        const list = JSON.parse(fs.readFileSync(PREMIUM_FILE));
        if (!list.includes(userWallet.toString())) {
          list.push(userWallet.toString());
          fs.writeFileSync(PREMIUM_FILE, JSON.stringify(list, null, 2));
        }
        return res.json({ premium: true });
      }
    }
  }

  res.json({ premium: false });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🔥 Subscription listener running at http://localhost:${PORT}`);
});
