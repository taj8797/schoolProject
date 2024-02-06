const mongoose = require("mongoose")

mongoose.connect(process.env.db).then(()=>{
    console.log('db is connected');
}).catch((error)=>{
    console.log("db is not connected",error);
})