const express = require('express');
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
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

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */

authRouter.get("/logout",authController.logoutUserController)

// now we are gonna create a getMe api, to fetch user details who request it
// for that we need a middleware that tells us which user is logged in

/**
 * @route : GET /api/auth/get-me
 * @description : get the current logged in user details
 * @access Private
 */

authRouter.get("/get-me",authMiddleware.authUser,authController.getMecontroller)

module.exports = authRouter