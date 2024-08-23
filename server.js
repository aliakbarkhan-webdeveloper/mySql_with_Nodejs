const express = require("express");
const sqlpool = require("./config/db.js");
const app = express();
const router=require("./routes/school.route.js");
const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
sqlpool.query("select 1").then(
  () =>{ console.log("DB is connected");
    app.listen(PORT, () => console.log("server is running on PORT " + PORT));

  }).catch((e)=>{console.log(e)});
  