const fs = require('fs');
// const book = {
//     title:'tom and jerry',
//     author:'harry poter',

// }
// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.txt',bookJson);

const readBuffer = fs.readFileSync('1-json.json')
const jsonData = readBuffer.toString();
console.log('object',jsonData);
const jsonbuffer = JSON.parse(jsonData);
console.log('1',jsonbuffer);
jsonbuffer.name = "chauhan";
jsonbuffer.age = '25';
const convertJson = JSON.stringify(jsonbuffer);
fs.writeFileSync('1-json.json',convertJson);
