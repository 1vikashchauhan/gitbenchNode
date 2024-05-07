const ExcelJS = require('exceljs');
const fs = require('fs').promises;
const jsonToExcel = async (jsonPath,excelPath) => {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');
        const data = JSON.parse(await fs.readFile(jsonPath, "utf-8"));
        const headers = Object.keys(data[0]);
        worksheet.addRow(headers);
        data.forEach((item) => {
            const values = Object.values(item);
            worksheet.addRow(values);
          });
          await workbook.xlsx.writeFile(excelPath);
          console.log(' successfully written to Excel file:',excelPath);
        } catch (error) {
          console.error('Error:', error);
        }
  

}

module.exports = jsonToExcel;