const express =require('express');
const path = require('path')


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

console.log('publicDirectoryPath',publicDirectoryPath);
console.log('object',express.static(publicDirectoryPath));

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'raining',
        location: 'gurugram'
    })
})
app.get('', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})