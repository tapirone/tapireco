const fs = require('fs');
const path = require('path');

const whitelistPath = path.resolve(__dirname, 'whitelist.json');
const outputPath = path.resolve(__dirname, 'whitelist.csv');

const whitelist = JSON.parse(fs.readFileSync(whitelistPath, 'utf-8'));

const csvHeader = 'wallet\n';
const csvRows = whitelist.map(wallet => wallet).join('\n');
const csv = csvHeader + csvRows;

fs.writeFileSync(outputPath, csv);

console.log(`✅ Exported ${whitelist.length} wallet(s) to whitelist.csv`);
