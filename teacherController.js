
const teacherCollection =require('../model/teacherModel')

//=====================for create teacher ========================

exports.createTeacherOne = async(req,res)=>{

    try{

        const dataCreate = new teacherCollection(req.body)

        const result= await dataCreate.save()

        

    if(!dataCreate){

        throw "something went wrong"
    }

    return res.send({

        success : true,
        status : 200,
        message : "data created successfully",
        data : result

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

// ========================for getTeacher ====================================

exports.getTeacherData = async (req,res)=>{

    try{

        const getInstaceData = await teacherCollection.find({})

        if(!getInstaceData){

            throw "something went wrong"
        }

        return res.send({

            success : true ,
            status : 200,
            message : "data get successfullly",
            data : getInstaceData
        })
    }catch(error){

        return res.send({

            success : false ,
            status : 500,
            message : "Server Error",
            error : error
        })
    }

}


// ============================for updataTeacher by id=======================

exports.updateTeacherData = async(req,res)=>{

    const {id}= req.params
    

    try{

        const resultUpdate = await teacherCollection.findByIdAndUpdate(id,req.body,{new : true})
        if(!resultUpdate){

            throw  " something went wrong"
        }

        return res.send({

            success : true ,
            status : 200,
            message : "data update successfullly",
            data : resultUpdate
        })


    }catch(error){

        return res.send({

            success : false,
            status : 500,
            message : "Server error",
            error : error
        })

    }
}


// =======================delete teacher Data By id ===========================

exports.deleteTeacherData = async(req,res)=>{

    
    const {id}= req.params.id


    try{


    
        const resultDelete = await teacherCollection.findByIdAndDelete(id,req.body,{new : true})
        if(!resultDelete){

            throw  " something went wrong"
        }

        return res.send({

            success : true ,
            status : 200,
            message : "data delete successfullly",
            data : resultDelete
        })


    }catch(error){

        return res.send({

            success : false,
            status : 500,
            message : "Server error",
            error : error
        })

    }
}

//========================for aggriration purpose ==========================

exports.getDataByCourse = async(req,res)=>{

    try{

        const responseCourse =await teacherCollection.aggregate([


            {   $match : 
               {address : "partstreet",

            },
        },
            {
                $count :  "sumofAddress"
            }

        
        
        ])
        
        console.log("responseCourse==========",responseCourse);
        return res.send({

            success : true ,
            status : 200,
            message : 'server create successfully',
            data : responseCourse
        })
    }catch(error){

        return res.send({

            success : false,
            status : 200,
            message : 'Server Error',
           error : error
        })
    }

}

//========================for aggriration purpose ==========================

// ==========================updatemanyById==================

exports.manyDataUpdate = async(req,res)=>{
    // const id = req.params.id


    try{

    // console.log('id===',id);
    const resultManyUpdate = await teacherCollection.updateMany(req.body)

    console.log("resultManyUpdate=========",resultManyUpdate);
    if(!resultManyUpdate){
        throw "something went wrong"

    }

    return res.send({
        success : true,
        status : 200,
        message : 'updateMany successfully',
        data : resultManyUpdate
    })
   }catch(error){

    
    return res.send({
        success : false,
        status : 500,
        message : 'Server Errror',
        error : error
    })
   }

}


//=============================using $unwind operator==============

exports.findingSubject = async(req,res)=>{

    const getSubject= await teacherCollection.aggregate([

        {
            $unwind:
              
              {  path: "$subjects",
             
               
          }
            },
            {
                $limit : 1
            }

    ])

   return res.send({

    success : true ,
    status : 200,
    message :"fetching successful",
    data : getSubject


   })

}

//==========================$project Operator==============
exports.findSome = async(req,res)=>{

    const getSome = await teacherCollection.aggregate([

        {$project : {"firstName":1,"lastName" : 1}  },

        {$sort : {"firstName" : -1}}
    ])

    return res.send({

        success : true ,
        status : 200,
        message :"fetchin some data ",
        data : getSome
    
    
       })
    
}


//=================================$match operator =============================

exports.matchDoc=async(req,res)=>{

    const matchData = await teacherCollection.aggregate([

        {$match : {firstName : "real1224333"}},
        {$limit : 2},

        {$project : {"firstName" : 1,}}
    ])

    
    return res.send({

        success : true ,
        status : 200,
        message :"fetchin match Data ",
        data : matchData
    
    
       })
}

//=================$group operator =====================

exports.groupData = async(req,res)=>{

    const getData = await teacherCollection.aggregate([

        {$group : {_id : "$subjects",
    count : {$sum : 1}}
        }
    ])

    return res.send({

        success : true ,
        status : 200,
        message :"fetchin match Data ",
        data : getData
    
    
       })
}




//==================================for Lookup operator ======================


exports.findOne=async(req,res)=>{

    const getTeacher = await teacherCollection.aggregate([

        {
            $lookup :{
                from : "admincollections",
                localField : "added_By",
                foreignField : "_id",
                as : "admin_info"
            }

            }
    ])
 

    return res.send({
        success : true ,
        status : 200,
        message : "Date get Successfully",
        data : getTeacher

    })

}
    
