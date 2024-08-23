const mysql=require("mysql2/promise");

const sqlpool=mysql.createPool(
{
host:"localhost",
user:"root",
password:"password",
database:"school",
}
)

module.exports=sqlpool;