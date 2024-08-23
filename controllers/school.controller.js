const db=require("../config/db.js")
const getTeachers=async (req,res)=>{
try {
    db.query("USE school");
    const data=await db.query("SELECT * FROM teachers");
    if (!data) {
        res.status(404).send({
            success:false,message:"No, Records"
        })
        return;
    }
    res.json(data[0]);
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,message:"error in get Teachers API",error
    })
    
}
};

module.exports=getTeachers;