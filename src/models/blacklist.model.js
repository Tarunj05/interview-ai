const mongoose = require("mongoose")

// now we create a database schema

const blacklistTokenSchema = new mongoose.Schema({
    token :{
      type: String,
      required: [true , "Token is required to be added in blacklist"]
    }
  },
  {timestamps: true})


  const tokenBlacklistModel = mongoose.model("blacklistTokens",blacklistTokenSchema)

  module.exports = tokenBlacklistModel