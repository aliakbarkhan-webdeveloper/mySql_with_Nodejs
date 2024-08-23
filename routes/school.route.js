const router=require("express").Router();
const getTeachers=require("../controllers/school.controller.js")
router.get("/teacher",getTeachers)



module.exports=router;