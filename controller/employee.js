const Employee = require("../model/model");

const getEmployees = async (req, res) => {
    try {
        const findEmployee = await Employee.find();
        res.status(200).json(findEmployee);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};

const createEmployees = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(200).json(newEmployee);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
}

const findEmployees = async (req, res) => {
    try {
        console.log("Finding");
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
}

const updateEmployees = async (req, res) => {
    try {
        console.log("Finding");
        const employee = await Employee.findById(req.params.id);
        await employee.updateOne({$set: req.body})
        console.log("done");
        res.status(200).json(employee);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};

const deleteEmployees = async (req, res) => {
    try {
        console.log("Finding");
        const employee = await Employee.findOneAndDelete(req.params.id);
        res.status(200).json(employee);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};

module.exports = {
    getEmployees, createEmployees, findEmployees, updateEmployees, deleteEmployees
};
