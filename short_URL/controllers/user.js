const USER = require('../models/user')
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth')
const handleSignup =  async (req,res) => {
  const {name,email,password} = req.body;
  USER.create({
    name,
    email,
    password
  })
  res.render('home');
}

const handleLogin =  async (req,res) => {
    const {email,password} = req.body;
   const user = await USER.findOne({email,password})
   

   if(!user) {
    return res.status(500).json({error: "invalid name or password"})
   }

   const session = uuidv4();
   setUser(session,user);
   res.cookie("uid",session);
    res.render('home');
  }

module.exports = {
    handleSignup,
    handleLogin
}