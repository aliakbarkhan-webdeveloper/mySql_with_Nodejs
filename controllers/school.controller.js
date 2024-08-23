const db = require("../config/db.js");
const getTeachers = async (req, res) => {
  try {
    db.query("USE school");
    const data = await db.query("SELECT * FROM teachers");
    if (!data) {
      res.status(404).send({
        success: false,
        message: "No, Records",
      });
      return;
    }
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get Teachers API",
      error,
    });
  }
};

const getTeacherById = async (req, res) => {
  try {
    // db.query("USE school");
    const id = req.params.id;
    console.log(id);

    if (!id) {
      return res.status(404).send({
        success: false,
        message: "need param",
      });
    }
    const data = await db.query(`select * FROM teachers WHERE id=${id}`);
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get Teachers API",
      error,
    });
  }
};

const createTeacher = async (req, res) => {
  try {
    db.query("USE school")
    const { id, Name, dep_id } =req.body;
    console.log(Name);
    //let id, Name, dep_id;
    // Name = data.Name;
    // dep_id = data.dep_id;
    // id = data.id;

    if (!id || !Name || !dep_id) {
      return res.send("some data is missing");
    }

    await db.query(`INSERT INTO teachers (id,Name,dep_id) values(?,?,?)`,[id,Name,dep_id]);

    res.send("created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get Teachers API",
      error,
    });
  }
};
module.exports = { getTeachers, getTeacherById, createTeacher };
