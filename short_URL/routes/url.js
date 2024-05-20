const express = require('express');
const {handleShortUrl,handletotelClick } =  require('../controllers/url')
const router = express.Router();

router.post('/',handleShortUrl);

module.exports = router