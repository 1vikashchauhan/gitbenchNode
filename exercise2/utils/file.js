const fs = require('fs').promises;
const fsExist = require('fs');
const fileSystem = async (filePath,enCoding,copyfilePath) => {
    try {
    await fs.writeFile(filePath,'write file added');
    await fs.appendFile(filePath,'\n append function working');
    if(fsExist.existsSync(filePath)) {
     const file  = await fs.readFile(filePath,enCoding)
     fs.copyFile(filePath,copyfilePath);
    }
     
    } catch (error) {
     console.log(error)
 }
 }

 module.exports = fileSystem