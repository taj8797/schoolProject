

const express = require("express")



const routesTeacher =express.Router()

const teacherController= require("../controller/teacherController")

routesTeacher.post("/createTeachers",teacherController.createTeacherOne)

routesTeacher.get("/showTeacher",teacherController.getTeacherData)

routesTeacher.put("/updateTecher/:id",teacherController.updateTeacherData)


routesTeacher.delete("/deleteTeacher/:id",teacherController.deleteTeacherData)

//================get data by subject and count===================


routesTeacher.get("/getCourse",teacherController.getDataByCourse)


//===============for update Many by Id===================

routesTeacher.put("/updateManyData",teacherController.manyDataUpdate)

//=========================$unwind operator ====================

routesTeacher.get("/findSubject",teacherController.findingSubject)

//==========================$project Operator==============

routesTeacher.get("/findSomeField",teacherController.findSome)

//==========================$match Operator==============

routesTeacher.get("/matchOperation",teacherController.matchDoc)


//=================$group operator =====================

routesTeacher.get("/groupOperation",teacherController.groupData)


//==================================for Lookup operator ======================

routesTeacher.get("/findData",teacherController.findOne)





module.exports = routesTeacher