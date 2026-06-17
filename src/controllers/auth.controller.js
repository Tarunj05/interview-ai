const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * @name registerUserController
 * @description register a new user, expects username, email and password in request body
 * @access Public
 */

async function registerUserController(req , res){
  //destructure the req and get the username , email , and password
  const{username, email, password} = req.body

  if(!username || !email || !password){
    return res.status(400).json({
      message : "Please provide username , email and password"
    })
  }
  // now we have to check if a user with same username exists or not
  // if it exists , return with an error message
  const isUserAlreadyRegistered = await userModel.findOne({
    $or :[ {username} , {email}] // it either of these are found return it
  })
  if(isUserAlreadyRegistered){
    return res.status(400).json({
      message:"Account already exists with this email or username"
    })
  }
  // now we can register a new user
  // before that we hash the password
  // for that install bcryptjs , jsonwebtoken , cookie parser

  const hash = await bcrypt.hash(password,10);

  //now using this hash we create a new user

  const user = await userModel.create({
    username,
    email,
    password : hash
  })

  // now we create a token for this user
  const token = jwt.sign
}


module.exports = {
  registerUserController
}
// exports an object