const { getEmployees, createEmployees, findEmployees, updateEmployees, deleteEmployees} = require("./controller/employee");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Main page I guess");
});

module.exports = router;

router.get("/employees", getEmployees);

router.post("/employees", createEmployees);

router.get("/employees/:id", findEmployees);

router.put("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

