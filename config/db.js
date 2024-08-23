const mysql=require("mysql2");

const sqlpool=mysql.createPool(
{
host:"localost",
user:"root",
password:"password",
database:"school",
},()=>console.log("connection established")

)

module.exports=sqlpool;