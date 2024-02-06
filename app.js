const express = require("express")

const app=express()

app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()


const adminRoutes= require('./Routers/adminRoutes')
const studentRoutes = require('./Routers/studentRouters')
const parentRoutes = require('./Routers/parentRoutes')

const signupRouters= require('./Routers/signupRouter')

const teacherRoutes = require("./Routers/teacherRoutes")
const loginRouter=require("./Routers/LoginRouter")




const port =process.env.port || 5002

require('./db/db')
app.use('/api/student',studentRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/parent',parentRoutes)

app.use("/api/teacher",teacherRoutes)
app.use("/api/user",signupRouters)
app.use("/api/sinup",loginRouter)



app.get('/',(req,res)=>{
   res.send("here is the home page")
})
app.listen(port, ()=>{

    console.log(`server is running on ${port}`);
    
})
