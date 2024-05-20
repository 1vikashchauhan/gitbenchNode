const shortIdId =  require('shortid');
const URL = require('../models/url');

const  handleShortUrl = async (req,res) => {
  const body = req.body 
  const shortId = shortIdId(8);
  if (!body.redirectionURL) {
  
    return res.status(200).json({ error: 'URL is required' });
  } 
    URL.create({
       shortId : shortId,
       redirectionURL: body.redirectionURL,
       visitHistory : []
    })

    res.render('home',{
      url:shortId
    })
}

const handletotelClick =  async (req,res) => {
  // console.log('object');
  // const shortId =  req.params.shortId;
  // console.log('shortid',shortId);
  //  const click = URL.findOne({shortId}, function(err,user) 
  //  { console.log(user); });
}

module.exports = {
    handleShortUrl:handleShortUrl,
    handletotelClick:handletotelClick 
}