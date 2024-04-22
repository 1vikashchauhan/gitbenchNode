const express =require('express');
const path = require('path')
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})
app.get('', (req, res) => {
    res.render('index', {
        name:"vikash",
        title:"Whether app"
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        help:"help me please",
        title:"Help"
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