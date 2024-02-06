
//=======================admin Controller============================
//=======================admin Controller============================


//=======================create Student Data============================

const adminCollection = require("../model/adminModel")

exports.insertAdminData= async (req,res)=>{
    
try{

    const resultAdmin = await adminCollection.create(req.body)

    if(!resultAdmin){
        throw new error ("something went wrong")
    }
        
    res.send({
        success : true,
        status : 200,
        message : "admin data will  create ",
        data : resultAdmin

    })

}catch(err){
    res.send({
        success : false,
        status : 500,
        message : " admin data will  not create",
        data : err
    })
}

}


//======================get Student data============================

exports.getAdminData= async (req,res)=>{

try{

    const getAdmin = await adminCollection.find({})

    const getCountAdmin = await adminCollection.countDocuments()

    return res.json({
        success : true,
        status : 200,
        message : "get the data of admin  ",
         countNo : getCountAdmin,
        data :getAdmin

    })

}catch(err){
    return res.json({
        success : false,
        status : 500,
        message : " data will  not get",
        data : err
    })
}
}



// =================get only 6 class data=================

exports.findUser=async(req,res)=>{

    try{
const result = await adminCollection.find({class : 6})
if(!result){

    throw " something Went Wrong"
}

res.send({
    success : true,
    status : 200,
    message : " class 6 admin get  ",
    
    data :result
})

}catch(error){

    res.send({
        success : error,
        status : 500,
        message : " Server Error ",
        error : error
    })

}
}

//====================== deleteAdminById data============================

exports.deleteUser = async (req,res)=>{

    try{
    id = req.params.id

    const resultDelete = await adminCollection.findByIdAndDelete(id)

    if(!resultDelete){

        throw "something went wrong"
    }

    return res.send({
        success : true ,
        status : 200,
        message : 'data will deleted',
        data  : resultDelete
    })

}catch(error){

    return res.send({
        success : false ,
        status : 500,
        message : 'data will not deleted',
        data  : error
    })
}
}


//====================== updateStudentById data============================

exports.updateAdminData= async (req,res)=>{
    const   id =req.params.id
    
    
    try{

        const resultAdmin =await adminCollection.findByIdAndUpdate(id,req.body,{new : true})

        if(!resultAdmin){

            throw "something error"

        }
        return res.send({
            success : true ,
            status : 200,
            message : "data updated of admin",
            data : resultAdmin
        })
    }catch(error){

        return res.send({
            success : false ,
            status : 500,
            message : "data couldn't updated ",
            data : error
        })
    }
}

// //========================for findOneById admin=========================

// exports.findOneUser = async (req,res)=>{

//     try{

//         const id= req.params.id

//         const resultOne = await adminServices.findOneAdmin({_id :id})

//         if(!resultOne){
//             throw new error ("something went wrong")
//         }

//         return res.send({
//             success : true ,
//             status : 200,
//             message : "get one data",
//             data : resultOne

//         })
//     }catch(error){

//         return res.send({
//             success : false ,
//             status : 500,
//             message : "can't get One Data",
//             data : error

//         })
//     }
// }

// //========================for deleteManyById admin=========================

// exports.deleteManyUser = async (req,res)=>{

//     try{

//         id =req.params.id
      

//         const manyDelete = await adminServices.deleteManyAdmin(id,req.body)
//         if(!manyDelete){

//             throw "something went wrong"
//         }
//         return res.send({
//             success : true,
//             status : 200,
//             message : "deleted many admin data",
//             data : manyDelete
//         })
//     }catch(error){

//         return res.send({
//             success : false,
//             status : 500,
//             message : "admin many data couldn't delete",
//             data : error
//         })
//     }
// }

// //========================for updateMany Student ById admin=========================

// exports.updateMuser = async(req,res)=>{

//    try {

//         const updateIds = req.body._ids
//         const updateData = req.body

//         const obj = Object.fromEntries(Object.entries(updateData).filter(([key,value])=>key!="_ids"))

//         const resultM = await adminServices.updateMS(updateIds,obj)

//        if(!resultM){
//         return  res.send({

//             success : true,
//             status : 200,
//             message : "update many data successfully",
//             data : resultM

            
//         })
//        }




        
        
//     }catch(error){

//     return  res.send({

//         success : false,
//         status : 500,
//         message : "data can't be updated",
//         data : error

        
//     })
// }
// }



// //========================for insertMany Student  admin=========================

// exports.InsertMu = async(req,res)=>{

//     try{
//     const body=req.body
//     console.log("body=========",body);

//     const resultIm = await adminServices.insertInstance(body)

//     if(!resultIm){

//         throw "something went wrong"

//     }

//     return res.send({

//         success : true ,
//         status : 200,
//         message : "insert many data",
//         data : resultIm
//     })

// }catch(error){

//     return res.send({

//         success : false ,
//         status : 500,
//         message : "internal server error",
//         error : error
//     })


// }
// }


exports.getAdmin= async(req,res)=>{
    const id = req.params.id

    console.log("id======",id);
    try{
     
        const resultData= await adminCollection.findById(id).populate("teacher_info")

        console.log("resultData======",resultData);
        if(!resultData){
            throw "something error"
        }

        return res.send({

            success : true ,
            status : 200,
            message : "Server Create Successfully",
            data : resultData
        })
    }catch(error){


        return res.send({

            success : false,
            status : 500,
            message : "Server Error",
            error : error
        })
    }
}

exports.findInfo=async(req,res)=>{
    const result= await adminCollection.aggregate([
        {
          $lookup: {
            from: "teachers",
            localField: "teacher_info",
            foreignField: "_id",
            as: "teacher_details",
          },
        },
    ])

return res.send({
    success : true,
    status : 200,
    message : "Data fetch success",
    data : result
})  

 

}
