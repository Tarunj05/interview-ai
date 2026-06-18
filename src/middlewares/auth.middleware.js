const jwt = require("jsonwebtoken")

// middleware has three parameters : request , response and next
function authUser(req,res,next){
  const token = req.cookies.token

  // if we don't get a token , we can't authenticate user

  if( !token ){
    return res.status(401).json({
      message :"Token not Provided"
    })
  }

  //now we have recieved the token
  // we have to verify it, if valid token -> stored in decoded , if invalid(wrong or expired) throw err
  // so we use a try catch block

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //we create a new property and add the token in it
    req.user = decoded

    next()
  }catch(err){
    return res.status(401).json({
      message : "Invalid Token"
    })
  }
}

module.exports = { authUser }