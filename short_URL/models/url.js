
const mongoose = require('mongoose');

const urlSchema =  new mongoose.Schema({
    shortId: {
        type:String,
        unique:true,
        required:true
    },
    redirectionURL: {
        type: String,
        required:true,
     },
     visitHistory:[{timeStamp : {type : Number}}]
})

const URL = mongoose.model("url",urlSchema);
module.exports =  URL