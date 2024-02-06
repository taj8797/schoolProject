
//===================================student  services=====================================>

const collectionOfStudent = require('../model/studentModel')

//============for createStudent=======================

exports.insertStudent = async(body)=>{

    const dataStudent=new collectionOfStudent({
        ...body
    })

    const result=  await dataStudent.save()
    return result
}


//============for getData of student=======================

exports.getStudent = async()=>{

    const dataGet= await collectionOfStudent.find({})
    
    return dataGet
    
}


// ==================for count in document========================

exports.count = async()=>{

    const dataGet= await collectionOfStudent.find({}).count()
    
    return dataGet
    
}

// =================get only 6 class data=================
exports.findClass=async ()=>{

    const datafind = await collectionOfStudent.find({class : 6})
    return datafind
}

//============for deleteDataById of student=======================

exports.deleteStudent = async(id)=>{
    
    const response = await collectionOfStudent.findByIdAndDelete({_id : id})

    return response
}



//============for updateDataById of student=======================

exports.updateStudent = async(id,body)=>{

    const responseUpdate = await collectionOfStudent.findByIdAndUpdate(id,body,{new : true})

    return responseUpdate
}


//========================for findOneById student=========================

exports.findOneStudent = async(id)=>{
    
    const responseOne = await collectionOfStudent.findById({_id : id},{new : true})

    return responseOne
}

//========================for deleteManyById student=========================

exports.deleteManyStudent = async(id)=>{

    const responseDelete = await collectionOfStudent.deleteMany(id)

    return responseDelete
}

//========================for updateMany Student ById student=========================

exports.updateMS =async(ids,updatePart)=>{

    const responseMS = await collectionOfStudent.updateMany({_ids :{$in :ids}}, {$set : updatePart})

    return responseMS
}

//========================for insertMany Student  student=========================

exports.insertInstance=async(body)=>{

    const responseIm = await collectionOfStudent.insertMany(body)
    return responseIm
}

//========================for find student and parents data=====================
exports.findOneStdnt =async(id)=>{


    const response = await collectionOfStudent.findById(id).populate('parent_Info')

    return response
}

//==============using $addfield operator ==============================



exports.addField = async()=>{

    const addData = await collectionOfStudent.aggregate([

        {
            $addFields : {
                aveGrade : { $avg : "$marks"}
            }
        },
             {   $project : {
                    "firstName" : 1,
                    "aveGrade"  : 1
                },
            
            }
        ])
          return addData
    }