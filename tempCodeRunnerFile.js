import fs from 'fs';

const jsonData = fs.readFileSync('./data.json', 'utf-8'); 
const data = JSON.parse(jsonData); 
console.log(data);