
//=======================student Controller============================


//=======================create Student Data============================


const studentServices = require("../service/studentServices")

exports.insertStudentData= async (req,res)=>{
    
try{

    const resultStudent = await studentServices.insertStudent(req.body)

    if(!resultStudent){
        throw new error ("something went wrong")
    }

    res.send({
        success : true,
        status : 200,
        message : "admin data will  create ",
        data : resultStudent

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

exports.getStudentData =async ( req,res)=>{
    try{

    const resultUser = await studentServices.getStudent()

    const countData = await studentServices.count()

    // const count = resultUser.length

    if(!resultUser){
        throw  ("something went wrong")
    }

    return res.json({
        success : true,
        status : 200,
        message : "get the data of student  ",
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



// =================get only 6 class data=================

exports.findUser=async(req,res)=>{

    try{
const result = await studentServices.findClass()
if(!result){

    throw " something Went Wrong"
}

res.send({
    success : true,
    status : 200,
    message : " class 6 student get  ",
    
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

//====================== deleteStudentById data============================

exports.deleteUser = async (req,res)=>{

    try{
    id = req.params.id

    const resultDelete = await studentServices.deleteStudent(id,req.body)

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

        const resultUpdate =await studentServices.updateStudent(id,body)

        if(!resultUpdate){

            throw "something error"

        }
        return res.send({
            success : true ,
            status : 200,
            message : "data updated of student",
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

//========================for findOneById student=========================

exports.findOneUser = async (req,res)=>{

    
    const id= req.params.id

    try{


        const resultOne = await studentServices.findOneStudent(id)

        if(!resultOne){
            throw new error ("something went wrong")
        }

        return res.send({
            success : true ,
            status : 200,
            message : "get one data",
            data : resultOne

        })
    }catch(error){

        return res.send({
            success : false ,
            status : 500,
            message : "can't get One Data",
            data : error

        })
    }
}

//========================for deleteManyById student=========================

exports.deleteManyUser = async (req,res)=>{

    try{

        id =req.params.id
      

        const manyDelete = await studentServices.deleteManyStudent(id,req.body)
        if(!manyDelete){

            throw "something went wrong"
        }
        return res.send({
            success : true,
            status : 200,
            message : "deleted many student data",
            data : manyDelete
        })
    }catch(error){

        return res.send({
            success : false,
            status : 500,
            message : "student many data couldn't delete",
            data : error
        })
    }
}

//========================for updateMany Student ById student=========================

exports.updateMuser = async(req,res)=>{

   try {

        const updateIds = req.body._ids
        const updateData = req.body

        const obj = Object.fromEntries(Object.entries(updateData).filter(([key,value])=>key!="_ids"))

        const resultM = await studentServices.updateMS(updateIds,obj)

       if(!resultM){
        return  res.send({

            success : true,
            status : 200,
            message : "update many data successfully",
            data : resultM

            
        })
       }




        
        
    }catch(error){

    return  res.send({

        success : false,
        status : 500,
        message : "data can't be updated",
        data : error

        
    })
}
}



//========================for insertMany Student  student=========================

exports.InsertMu = async(req,res)=>{

    try{
    const body=req.body
    console.log("body=========",body);

    const resultIm = await studentServices.insertInstance(body)

    if(!resultIm){

        throw "something went wrong"

    }

    return res.send({

        success : true ,
        status : 200,
        message : "insert many data",
        data : resultIm
    })

}catch(error){

    return res.send({

        success : false ,
        status : 500,
        message : "internal server error",
        error : error
    })


}
}


//========================for find student and parents data=====================

exports.findOneData  = async(req,res)=>{
    const id=req.params.id

    try{



        console.log('id======',id);

        const resultStudnt= await studentServices.findOneStdnt(id)
        console.log('resultstudnt',resultStudnt);

    if(!resultStudnt){
        throw "something went wrong"
    }

return res.send({
    success : true,
    status : 200,
    message : "get the one data",
    data : resultStudnt

})

    }catch(error){

        return res.send({
            success : false,
            status : 500,
            message : "server error",
            error : error
        
        })
    }
}


//==============using $addfield operator ==============================

exports.getField= async(req,res)=>{
    
    const resultField = await studentServices.addField()
   return  res.send({

    success : true,
    status : 200,
    message : "field add successfully",
    data   : resultField
   })
}

