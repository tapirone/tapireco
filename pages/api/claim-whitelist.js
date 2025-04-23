import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'whitelist.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { wallet } = req.body;
    if (!wallet) return res.status(400).json({ error: 'No wallet provided' });

    let data = [];
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    if (!data.includes(wallet)) {
      data.push(wallet);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    res.status(200).json({ success: true });
  } else if (req.method === 'GET') {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      res.status(200).json({ whitelist: data });
    } else {
      res.status(200).json({ whitelist: [] });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
