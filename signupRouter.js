const signupController = require("../controller/signupController")

const loginController = require("../controller/LoginController")

const expres = require("express")

const signupRouter = expres.Router()

//======================signUp=====================

signupRouter.post("/createUser",signupController.signUP)

//===================login =====================

signupRouter.post("/createUser",loginController.loginInfo)




  module.exports = signupRouter