const express =  require('express');
const multer  = require('multer')
const mail =  require('./controller/sendMail')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))
const port = 8001;

app.get('/',(req,res) => {
    res.render('home')
})
app.get('/mail',mail)
app.post('/upload',upload.single('file-upload'),(req,res) => {
    console.log('res',req.body);
    console.log('res',req.file);
    res.render('home')
})
app.listen(port, () => {
   console.log('server is running')
})