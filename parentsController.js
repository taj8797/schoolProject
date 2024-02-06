//=======================create Student Data============================

const parentCollection = require('../model/parentModel')
const parentService= require('../service/parentsServices')

exports.insertParentData= async (req,res)=>{
    
try{

    const resultParent= await parentService.insertParent(req.body)

    if(!resultParent){
        throw new error ("something went wrong")
    }

    res.send({
        success : true,
        status : 200,
        message : " parents data will  create ",
        data : resultParent

    })

}catch(err){
    res.send({
        success : false,
        status : 500,
        message : " parent data will  not create",
        data : err
    })
}

}


//======================get parents data============================

exports.getParentData =async ( req,res)=>{
    try{

    const resultUser = await parentService.getParent()

    const countData = await parentService.count()

    // const count = resultUser.length

    if(!resultUser){
        throw  ("something went wrong")
    }

    return res.json({
        success : true,
        status : 200,
        message : "get the data of parents ",
         countNo : countData,
        data :resultUser

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

//====================== deleteStudentById data============================

exports.deleteUser = async (req,res)=>{

    try{
    id = req.params.id

    const resultDelete = await parentService.deleteStudent(id,req.body)

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

exports.updateUser = async (req,res)=>{

    try{
      const   id =req.params.id
      const body = req.body

        const resultUpdate =await parentService.updateStudent(id,body)

        if(!resultUpdate){

            throw "something error"

        }
        return res.send({
            success : true ,
            status : 200,
            message : "data updated of parents",
            data : resultUpdate
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



//========================for find student and parents data=====================

// exports.findBothData = async (req,res)=>{

//     id = req.params.id
//     try{

//         const resultAll = await parentCollection.findById(id).populate("student_info")
//         if(!resultAll){
//             throw "something went wrong"
//         }

//         res.send({

//             success : true ,
//             status : 200,
//             message : "Server Get Successfully",
//             data : resultAll

//         })
//     }catch(error){

//         res.send({

//             success : false ,
//             status : 500,
//             message : "Server Error",
//             error : error

//         })
//     }
// }

exports.findOne = async(req,res)=>{
    try{
        const id =req.params.id
        const gurdianResult=await parentService.findOneData(id)
        return res.send({success:true,
        status:200,
    massege:"Success",
    data:gurdianResult})
    }catch(error){
        return res.send({success:false,
        status:500,
    massege:"Internal Server Error",
error:error})
    }
    
}



//========================lookup-method==============================

exports.findParent = async(req,res)=>{

        const responseData= await parentService.findDataParent()

        return res.send({

            success : true,
            status : 200,
            message : "data get successfully",
            data : responseData
        })
    }



//=======================for adding parent in teacher===========================

exports.findParentData = async(req,res)=>{
    const id = req.params.id

    const getResult = await parentService.findOneParent(id)

    return res.send({

        success : true,
        status : 200,
        message : "get Parent Successfully",
        data : getResult


    })
   
}



//==================for lookup to get parent with admin=================

exports.findParentInfo = async (req,res)=>{
  
   const id =req.params.id
    const myResult =await parentService.findDataOne(id)

    return res.send({

        success : true,
        status : 200,
        message : "get Parent Successfully",
        data : myResult


    })
    }
