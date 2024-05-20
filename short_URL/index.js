const express =  require('express');
const path = require('path');
const urlRoute = require('./routes/url');
const staticRoute =  require('./routes/staticRouter')
const userRoute = require('./routes/user');
const URL =  require('./models/url')
const restrictUser = require('./middleware/auth')
const {handletotelClick } =  require('./controllers/url')
const {connectToMongodb } =  require('./connect');
const cookieParser = require('cookie-parser');

connectToMongodb('mongodb://127.0.0.1:27017/short-url').then(() => console.log('mongodb connected'));


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine','ejs');
app.set('views',path.resolve('./views'))
app.use(express.static('public'))
app.use(express.json());
app.use('/user',userRoute);
app.use('/url',restrictUser,urlRoute);
app.use('/',staticRoute);

app.put('/:shortId', async (req,res) => {
    const shortId =  req.params.shortId;
    console.log('shortID',shortId);
   const entry =  await URL.findOneAndUpdate({shortId}, {
      $push: {
         visitHistory: {
            timeStamp: Date.now()
         }
      }
   })
   if(!entry){
      console.log('entry',entry);
   }
   console.log(entry.redirectionURL);
   
   res.redirect(entry.redirectionURL);
})
app.get('/analytics/:shortId',handletotelClick)


const port = 8001;
app.listen(port, () => {
   console.log('server is running')
})