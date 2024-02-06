const parentsCollection = require("../model/parentModel");
const mongoose = require("mongoose")


//============for createStudent=======================

exports.insertParent = async (body) => {
  const dataParent = new parentsCollection({
    ...body,
  });

  const result = await dataParent.save();
  return result;
};

//============for getData of student=======================

exports.getParent = async () => {
  const dataGet = await parentsCollection.find({});

  return dataGet;
};

// ==================for count in document========================

exports.count = async () => {
  const dataGet = await parentsCollection.find({}).count();

  return dataGet;
};

//============for deleteDataById of student=======================

exports.deleteStudent = async (id) => {
  const response = await parentsCollection.findByIdAndDelete({ _id: id });

  return response;
};

//============for updateDataById of student=======================

exports.updateStudent = async (id, body) => {
  const responseUpdate = await parentsCollection.findByIdAndUpdate(id, body, {
    new: true,
  });

  return responseUpdate;
};

//====================for get parents and student data ==========================
exports.findOneData = async (id) => {
  const resultGurdian = await parentsCollection
    .findById(id)
    .populate("student_info");
  return resultGurdian;
};

//========================lookup-method==============================

exports.findDataParent = async () => {
  const resultData = await parentsCollection.aggregate([
    {
      $lookup: {
        from: "studentcollections",
        localField: "student_info",
        foreignField: "_id",
        as: "student_details",
      },
    },
  ]);

  return resultData;
};

//=======================for adding parent in teacher===========================

exports.findOneParent = async (id) => {

  
  const dataTeacher = await parentsCollection.aggregate([

    {
      $match : {
        _id : new mongoose.Types.ObjectId(id)
      }
      },
    
    {
      $lookup: {
        from: "teachers",
        localField: "added_By",
        foreignField: "_id",
        as: "teacher_Info",
      },
    },
  ]);

  return dataTeacher
};


//============================lookup for parent==================

exports.findDataOne= async(id)=>{

  const getResult= await parentsCollection.aggregate([


    {
      $match : {
        _id : new mongoose.Types.ObjectId(id)
      }
      },
    
    {
      $lookup: {
        from: "admincollections",
        localField: "added_By",
        foreignField: "_id",
        as: "admin_info",
      },
    },
  ]);
    
  
  return getResult
}