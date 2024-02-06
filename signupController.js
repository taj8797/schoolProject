const signupCollection = require('../model/signupModel')

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret_key = "nodeApi"

exports.signUP = async(req,res)=>{
    // console.log('=====',req);

    const {password,email,userName} = req.body
    
    try {
    
        //==============================finding existing user================================

        const existingUser = await signupCollection.findOne({email : email})

        
        if(existingUser){
            return res.send({
                status : 400,
                message : "Already EmailId Exit",

            })
        }
        console.log("existingUser====",existingUser);

    //==============================checking user password ================================

        const hashPassword =await bcrypt.hash(password,10)

        const userResult = await signupCollection.create({

            userName : userName,
            password : hashPassword,
            email : email
        })

        console.log("userResult===",userResult);


        const token = jwt.sign({
            email : userResult.email,
            id:userResult._id
        },secret_key)

        return res.send({success : true,status : 200, message : "SignUp Successfull",data : userResult,token : token


        })



    }catch(error){
        return res.send({
            success : false,
            status : 500,
            message : "Internal Server Error",
            error : error
        })



    }
}



