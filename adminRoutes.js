// ================ Admin Route===========================

const express = require("express")

const AdminRouter = express.Router()

const adminController = require('../controller/adminController')

//========================for create Data=========================

AdminRouter.post('/createAdmin', adminController.insertAdminData)


//========================for get Data Admin=========================

AdminRouter.get('/getAdmin', adminController.getAdminData)

//========================for deletebyId admin=========================

AdminRouter.delete('/deleteAdmin/:id', adminController.deleteUser)



//========================for upDatebyId student=========================

AdminRouter.put('/updataAdmin/:id', adminController.updateAdminData)


AdminRouter.get('/showAdmin/:id', adminController.getAdmin)

AdminRouter.get('/showAdminInfo', adminController.findInfo)






// //========================for findOneById in admin=========================

// router1.get('/findOneData/:id',adminController.deleteUser)

// //========================for deleteManyById student=========================

// router1.delete('/deleteManyData',adminController.deleteManyUser)

// //========================for updateMany Admin ById =========================

// router1.put('/updateManyData',adminController.updateMuser)


// //========================for insertMany Admin  s=========================

// router1.post('/insertManyData',adminController.InsertMu)


// // =================get only 6 class data=================

// router1.get('/get6Class',adminController.findUser)


module.exports = AdminRouter


