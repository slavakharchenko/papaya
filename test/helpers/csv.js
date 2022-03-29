const papaParse = require('papaparse');
const fs = require("fs");

async function writeCSV(data, path = './test.csv') {
  const csv = papaParse.unparse(data);
  writeFile(path, csv);
}

function writeFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, data, 'utf8');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { writeCSV };