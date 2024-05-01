const mongoose = require('mongoose');
const express  = require('express');
const validate = require('validator')
const app = express();

const ObjectId = mongoose.Schema.ObjectId;

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    jobTitle:{
        type: String
    },
    gender:{
        type: String
    },
   
}, {
    timestamps:true
})

// const taskschema = new mongoose.Schema({
//     description:{
//         type:String,
//         trim:true,
//     },
//     completed: {
//         type: Boolean,
//         default:false,
//     },
//     age: {
//         type: Number,
//         max:12,
//     }
   
// }, {
//     timestamps:true
// })
port = 5000;
const User = mongoose.model('User',schema);
// const task = mongoose.model('task',taskschema);

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
.then(() => console.log('mongoose connected'))
.catch((error) => console.log('error occured',error))


app.use(express.urlencoded({extended: false}));
app.get('/users', async (req,res) => {
    const databaseUsers = await User.find({});
    const html = `
    <ul>
    ${databaseUsers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join("")}
    </ul>
    `
    res.status(200).send(html);
})
app.get('/all/users', async (req,res) => {
    const databaseUsers = await User.find({});
    res.status(200).json(databaseUsers);
})
app.get('/users/:id', async (req,res) => {
    try {
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            const user = await User.findById(req.params.id);
            if(!user) return res.status(404).json({error:"user not found"})
            res.status(200).json(user);
        }
        else {
            res.status(404).json({err : "user id does not found"})
        }
        
    } catch (error) {
        console.log('error',error);
    }
    
})
app.patch('/users/:id', async (req,res) => {
    try {
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            const user = await User.findByIdAndUpdate(req.params.id,{firstName: "geeta"});
            if(!user) return res.status(404).json({error:"user not found"})
            res.status(200).json({status:"success"});
        }
        else {
            res.status(404).json({err : "user id does not found"})
        }
        
    } catch (error) {
        console.log('error',error);
    }
    
})
app.delete('/users/:id', async (req,res) => {
    try {
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            const user = await User.findByIdAndDelete(req.params.id);
            if(!user) return res.status(404).json({error:"user not found"})
            res.status(200).json({status:"success"});
        }
        else {
            res.status(404).json({err : "user id does not found"})
        }
        
    } catch (error) {
        console.log('error',error);
    }
    
})

app.post('/api/users',async(req,res) => {
    const body = req.body;
   if(!body || !body.first_name || !body.last_name || !body.email) return res.status(401).json({msg:"all field are manatory"})
  const results = await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    jobTitle:body.email,
    gender:body.gender,
    email:body.Job_title
    })
    return res.status(201).json({status:"success"})
})

// app.post('/api/task',async(req,res) => {
//     console.log('task');
//     const {description, completed,age} = req.body;
//    if(!req.body || !req.body.description ) return res.status(401).json({msg:"all field are manatory"})
//   const results = await task.create({
//        description: description,
//        completed:completed,
//        age:age

//     })
//     console.log('results',results);
//     return res.status(201).json({status:"success"})
// })

app.listen(port,()=> {
    console.log('server running');
})