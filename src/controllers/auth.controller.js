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
  const token = jwt.sign({
    id : user.id,
    username : user.username
  }, process.env.JWT_SECRET, {
    expiresIn : "1d"
  })
  // now we send this token to the client in a cookie
  res.cookie("token", token )

  // now we send the response to the client
  res.status(201).json({
    message : "User registered successfully",
    user : {
      id : user.id,
      username : user.username,
      email : user.email
    }
  })
}
  // we can also send the token in the response body if we want

  /**
   * @name loginUserController
   * @description login a user, expects email and password in request body
   * @access Public
   */

  async function loginUserController(req, res){
    const{ email , password } = req.body

    // if email is not registered , return error
    const user = await userModel.findOne({email})

    if(!user){
      return res.status(400).json({
        message : "email not registered "
      })
    }
    // now as the user exists , we have to check the password
    const isPasswordValid = await bcrypt.compare(password,user.password)

    // if the password entered is not valid , return 
    if(!isPasswordValid){
      return res.status(400).json({
        message :"Wrong Password!! , Try again "
      })
    }
    // now we have a valid user with correct password
    // now we create a token

    const token = jwt.sign(
      { id : user.id , username: user.username},
      process.env.JWT_SECRET,
      {expiresIn: "1d"}
    )
    // now we store this token in a cookie
    res.cookie("token",token)
    // now we send the response to the client
    res.status(200).json({
      message : "User logged in successfully",
      // we can also send the token in the response body if we want
      user : {
        id : user._id,
        username : user.username,
        email : user.email
      }
    })
  }


module.exports = {
  registerUserController,
  loginUserController
}
// exports an object