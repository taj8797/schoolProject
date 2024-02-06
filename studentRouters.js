
// ================ Student Route===========================

const express = require("express")

const router1 = express.Router()

const studentController = require('../controller/studentController')

//========================for create Data=========================

router1.post("/createData", studentController.insertStudentData)


//========================for get Data student=========================

router1.get('/getData', studentController.getStudentData)

//========================for deletebyId student=========================

router1.delete('/deleteData/:id', studentController.deleteUser)



//========================for upDatebyId student=========================

router1.put('/updataData/:id', studentController.updateUser)


//========================for findOneById student=========================

router1.get('/findOneData/:id', studentController.deleteUser)

//========================for deleteManyById student=========================

router1.delete('/deleteManyData', studentController.deleteManyUser)

//========================for updateMany Student ById student=========================

router1.put('/updateManyData', studentController.updateMuser)


//========================for insertMany Student  student=========================

router1.post('/insertManyData', studentController.InsertMu)


// =================get only 6 class data=================

router1.get('/get6Class', studentController.findUser)


//========================for find student and parents data=====================
router1.get('/findOneDocument/:id', studentController.findOneData)


//==============using $addfield operator ==============================

router1.get('/addFields', studentController.getField)



module.exports = router1
