// to access .env file accross the sever,, config is a method of dotenv

require("dotenv").config();
const app = require("./src/app");
// import the connect to database module
const connectToDB = require("./src/config/database")
// call the function
connectToDB();

// const invokeGemeniAi = require("./src/services/ai.service")
// invokeGemeniAi();


app.listen(3000 , ()=>{
  console.log("sever is running on port 3000");
});
