const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  address: {
    type: String,
  },
});


let Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
