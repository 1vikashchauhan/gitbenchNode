const fs = require('fs').promises;
const path = require('path');
const { expect } = require('chai');
const fileSystem =  require('./utils/file')
describe('File System Operations', () => {
    before(async () => {
        await fileSystem();
    });

    it('should write to a file', async () => {
        const filePath = 'writefile.txt';
        const fileContent = await fs.readFile(filePath, 'utf-8');
        expect(fileContent).to.equal('write file added\n append function working');
    });

    it('should append to a file', async () => {
        const filePath = 'writefile.txt';
        await fs.appendFile(filePath, '\nappended content');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        expect(fileContent).to.contain('appended content');
    });

    // Add more test cases for file system operations as needed
});