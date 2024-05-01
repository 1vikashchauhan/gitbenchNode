const fs = require('fs').promises;
const fsExist = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const filePath = 'writefile.txt';
const copyfilePath = 'newcopyfile.txt';
const enCoding = 'utf-8';
const jsonPath = 'data.json';
const excelPath = 'data.xlsx';
// const fileSystem = async () => {
//    try {
//    await fs.writeFile(filePath,'write file added');
//    await fs.appendFile(filePath,'\n append function working');
//    if(fsExist.existsSync(filePath)) {
//     const file  = await fs.readFile(filePath,enCoding)
//     console.log('file',file);
//     fs.copyFile(filePath,copyfilePath);
//    }
    
//    } catch (error) {
//     console.log(error)
// }
// }

const jsonToExcel = async () => {
    try {
        // Create a new workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');
    
        // Read JSON data
        const data = JSON.parse(await fs.readFile(jsonPath, "utf-8"));
        const headers = Object.keys(data[0]);
        worksheet.addRow(headers);
        data.forEach((item) => {
            const values = Object.values(item);
            worksheet.addRow(values);
          });
      
          // Save Excel file
          await workbook.xlsx.writeFile(excelPath);
          console.log('JSON data successfully written to Excel file:',excelPath);
        } catch (error) {
          console.error('Error converting JSON to Excel:', error);
        }
  

}
// fileSystem();
jsonToExcel();