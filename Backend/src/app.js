const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require( "cors")
// creating an instance of server
const app = express()

// middlewares
app.use( express.json() );
app.use(cookieParser());
// creating a middleware to handle cors error
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}));

// REQUIRE ALL THE ROUTES HERE

// we will import/require the authRouter object

const authRouter = require("./routes/auth.routes")


// USING ALL THE ROUTES HERE
// now we use authrouter route and define a prefix
app.use("/api/auth",authRouter)



/*CREATING ALL THE API's HERE*/
 



module.exports = app

//read purpose of app.js file
// server is not started here , it is started in server.js file
