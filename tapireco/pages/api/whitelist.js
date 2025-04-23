import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { wallet, amount } = req.body;
  if (!wallet || !amount) {
    return res.status(400).json({ error: 'Wallet and amount are required' });
  }

  const filePath = path.resolve('./', 'whitelist.json');
  let whitelist = [];

  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      whitelist = JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading whitelist:', err);
    return res.status(500).json({ error: 'Error reading file' });
  }

  // Cek kalau wallet udah ada
  const existing = whitelist.find((entry) => entry.wallet === wallet);
  if (existing) {
    existing.amount += parseFloat(amount);
  } else {
    whitelist.push({ wallet, amount: parseFloat(amount) });
  }

  try {
    fs.writeFileSync(filePath, JSON.stringify(whitelist, null, 2));
    return res.status(200).json({ message: 'Added to whitelist', data: { wallet, amount } });
  } catch (err) {
    console.error('Error writing whitelist:', err);
    return res.status(500).json({ error: 'Error writing file' });
  }
}
