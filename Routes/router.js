const express = require('express');

const userController = require('../Controllers/userController')
const profileController = require('../Controllers/profileController')
 const jwtMiddleware = require('../Middlewares/jwtMiddleware')
 const multerConfig = require('../Middlewares/multerMiddleware')

//create router object of express to define path
const router = new express.Router()

//create router object to define path

//Register API path - http://localhost:4000/register - 
router.post('/register',userController.register)

//Login API path - http://localhost:4000/login -
router.post('/login',userController.login)


//Add user profile API path - http://localhost:4000/profile/add
router.post('/profile/add',jwtMiddleware,multerConfig.single('profileImage'),profileController.addUserProfile)

//get profile details API path - http://localhost:4000/profile/get-profile
router.get('/profile/get-profile',profileController.getProfile)

//update profile -  http://localhost:4000/profile/update-profile/6748393993
router.put('/profile/update-profile/:pid',jwtMiddleware,multerConfig.single('profileImage'),profileController.updateProfile)

module.exports = router