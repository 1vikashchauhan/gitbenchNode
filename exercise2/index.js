
const path = require('path');

const fileSystem =  require('./utils/file')
const jsonToExcel = require('./utils/excel')

const filePath = 'writefile.txt';
const copyfilePath = 'newcopyfile.txt';
const enCoding = 'utf-8';
const jsonPath = 'data.json';
const excelPath = 'data.xlsx';

fileSystem(filePath,enCoding,copyfilePath);
jsonToExcel(jsonPath,excelPath);

