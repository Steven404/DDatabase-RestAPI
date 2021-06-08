const { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } = require("./employees.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createEmployee: (req, res) => {
        const body = req.body;
        createEmployee(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).send("Database error, check for duplicate entries");
            } else {
                return res.send("Employee creation success");
            }
        });
    },
    getEmployees: (req, res) => {
        getEmployees((err, results) => {
            if (err){
                console.log(err);
                return res.status(500).send("Database error");
            } else {
                return res.send(results);
            }
        });
    },
    getEmployee: (req, res) => {
        const body = req.body
        getEmployee(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).send("Database error");
            } else {
                return res.send(results);
            }
        });
    },
    updateEmployee: (req, res) => {
        const body = req.body;
        updateEmployee(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).send("Database error, check for duplicate entries");
            } else {
                return res.send("Update successful!");
            }
        });
    },
    deleteEmployee: (req, res) => {
        const body = req.body;
        deleteEmployee(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).send("Database error, check if the ID exists");
            } else {
                return res.send("Delete successful!");
            }
        });
    }
}