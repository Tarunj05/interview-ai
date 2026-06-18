const express = require('express');
const authController = require("../controllers/auth.controller")
//creating a router object
const authRouter = express.Router()
// creating api route here

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
// here we will only create the route, all the logic 
// on how user will be created will be put in the controller file

authRouter.post("/register",authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */

authRouter.post("/login" , authController.loginUserController)



module.exports = authRouter