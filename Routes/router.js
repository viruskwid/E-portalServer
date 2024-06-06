const express = require('express')
const userController = require('../Controllers/userController')
const complaintController = require('../Controllers/complaintController')
const wasteController = require('../Controllers/wasteController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const complaint = require('../Models/complaintModel')
const router = new express.Router()

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)
//router specific middleware

//add complaints
router.post('/add-complaint',jwtMiddleware,multerConfig.single('image'),complaintController.addComplaintController)

//get user complaints

router.get('/user-complaints',jwtMiddleware,complaintController.getUserComplaints)

//remove user complaints

router.delete('/remove-complaints/:id',jwtMiddleware,complaintController.removeUserComplaintController)

//get all complaints
router.get('/all-complaints',complaintController.getAllComplaints)

//add waste
router.post('/add-waste',jwtMiddleware,multerConfig.single('image'),wasteController.addWasteController)

//allwaste admin
router.get('/all-waste',wasteController.allWasteController)

//user waste
router.get('/user-waste',jwtMiddleware,wasteController.userWasteController)

//remove waste
router.delete('/remove-waste/:id',jwtMiddleware,wasteController.removeWasteController)

//allusers
router.get('/all-users',userController.allusersController)

//status
router.put('/approve/:id',multerConfig.single('image'),complaintController.editComplaints)

module.exports=router
