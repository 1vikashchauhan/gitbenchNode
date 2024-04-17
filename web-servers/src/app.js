const express =require('express');
const path = require('path')
const hbs = require('hbs');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
const viewpaths = path.join(__dirname, '../templates/views')
const partialpaths = path.join(__dirname, '../templates/partials')


console.log('publicDirectoryPath',publicDirectoryPath);
console.log('object',express.static(publicDirectoryPath));

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');
app.set('views',viewpaths);
hbs.registerPartials(partialpaths);
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'raining',
        location: 'gurugram'
    })
})
app.get('', (req, res) => {
    res.render('index', {
        name:"vikash",
        title:"error"
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        help:"help me please",
        title:"error"
    });
})
app.get('*', (req, res) => {
    res.render('help', {
        title:"404 error"
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})