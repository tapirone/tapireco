import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'raised.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to read raised.json' });
    }
  } else if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      if (!amount || isNaN(amount)) return res.status(400).json({ error: 'Invalid amount' });

      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      data.total = parseFloat(data.total) + parseFloat(amount);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update raised.json' });
    }
  } else {
    res.status(405).end();
  }
}
