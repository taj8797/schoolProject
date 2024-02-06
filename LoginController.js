
const loginUser = require("../model/signupModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret_key = "my_api"

const { email, password } = req.body


exports.loginInfo = async(req, res) => {



    try {

        const existingUser = await loginUser.findOne({ email: email })

        if (!existingUser) {

            return res.send({
                status: 404,
                message: "Email Id is not found"

            })

        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return res.send({
                status: 404,
                message: "Invalid Password"


            })

        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret_key)



        return res.send({
            success: true,
            status: 200,
            message: "login Successfull",
            token: token
        })
    }catch(error){

        return res.send({
            success : false,
            message : "Internal Server Error",

        })
    }


}