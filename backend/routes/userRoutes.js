const express = require("express")
const { registerUser, authUser } = require("../controllers/userControllers")


const router = express.Router()

// API CALL http://localhost:5000/api/users
router.route("/").post(registerUser)
// API CALL http://localhost:5000/api/users/login
router.route("/login").post(authUser)


module.exports =  router