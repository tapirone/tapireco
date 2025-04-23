import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./', 'whitelist.json');

  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const list = JSON.parse(data);
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read whitelist' });
    }
  }

  else if (req.method === 'POST') {
    try {
      const { wallet } = req.body;
      if (!wallet) return res.status(400).json({ error: 'Wallet address is required' });

      const data = fs.readFileSync(filePath, 'utf8');
      const list = JSON.parse(data);

      if (!list.includes(wallet)) {
        list.push(wallet);
        fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
      }

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update whitelist' });
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
