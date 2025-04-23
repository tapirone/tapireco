const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3002;

const filePath = './credits.json';

app.use(cors());
app.use(express.json());

app.get('/api/credit/:wallet', (req, res) => {
  const wallet = req.params.wallet;
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json({ credit: data[wallet] || 0 });
});

app.post('/api/credit', (req, res) => {
  const { wallet, credit } = req.body;
  const data = JSON.parse(fs.readFileSync(filePath));
  data[wallet] = (data[wallet] || 0) + credit;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ success: true, newCredit: data[wallet] });
});

app.listen(PORT, () => {
  console.log(`🔥 Credit API running on http://localhost:${PORT}`);
});
