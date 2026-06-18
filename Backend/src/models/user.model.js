// require mongoose package
const mongoose = require("mongoose");

// now we create a scheme -> blueprint of user
// using mongoose package
const userSchema = new mongoose.Schema({
  //properties of user
  username:{
    type: String,
    //constraint with error message if violated
    unique:[true,"username already taken"],
    required: true,
  },
  email : {
    type: String,
    unique:[true,"Account already exists with this email address"],
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
})

// now we create a model for user
// using the method "model" of the mongoose package
// in which we tell that in which collection the users data should be saved

const userModel = mongoose.model("users",userSchema)
// tells that we store user data in users collection of the database
// and using the schems -> userSchema
module.exports = userModel;


