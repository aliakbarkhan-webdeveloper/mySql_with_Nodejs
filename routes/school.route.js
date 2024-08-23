const router=require("express").Router();
const {getTeachers,getTeacherById}=require("../controllers/school.controller.js");

//router for getting all data
router.get("/teacher",getTeachers)

//router for getting data by teacher id
router.get("/teacher/:id",getTeacherById)

module.exports=router;