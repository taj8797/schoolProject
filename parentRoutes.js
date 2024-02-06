
// ================ parent Route========================



const express = require("express")

const parentRouter = express.Router()
const parentController = require('../controller/parentsController')


parentRouter.post("/createParent", parentController.insertParentData)

parentRouter.get("/getParentDataAll", parentController.getParentData)

parentRouter.delete('/deleteParent/:id', parentController.deleteUser)



//========================for upDatebyId student=========================

parentRouter.put('/updateParent/:id', parentController.updateUser)


// parentRouter.get('/getInstance/:id',parentController.findBothData)
parentRouter.get('/getData/:id', parentController.findOne)



//========================lookup-method==============================

parentRouter.get('/getParent', parentController.findParent)

//================================for lookup methodn ====

parentRouter.get('/getParentOne/:id', parentController.findParentData)

//==================for lookup to get parent with admin=================

parentRouter.get('/getParentInfo/:id',parentController.findParentInfo)






module.exports = parentRouter