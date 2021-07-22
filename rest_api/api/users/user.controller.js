const { createUser, getUsers, getUserByUsername, deleteUser } = require("./user.service");

const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createUser(body, (err, results) =>{
            if (err) {
                console.log(err);
                return res.status(501).send("Database error, check for duplicate entries");
            }
            return res.status(200).json({
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.send(results);
        });
    },
    getUserByUsername: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.send(results);
        });
    },
    deleteUser: (req,res) => {
        const body = req.body;
        deleteUser(body, (err,results) =>{
            if (err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.send(results);
        });
    },
    logIn: (req, res) => {
        const body = req.body;
        getUserByUsername(body.username, (err, results) => {
            if (err){
                return res.status(405).send("Database error: Check if the database server is up and running");
            }
            if (!results){
                return res.status(404).send("Invalid username/password combination");
            }
            var hash = results.PASSWORD;
            const result = compareSync(body.password, hash);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({
                    data: body.username,
                    role: results.ROLE
                }, process.env.ENCRYPTION_KEY, {
                    expiresIn: "8h"
                });
                return res.json({
                    token: jsontoken
                });
            } else {
                return res.status(400).send("Invalid username/password combination");
            }
        });
    }
};