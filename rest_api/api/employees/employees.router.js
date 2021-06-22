const { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } = require("./employees.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createEmployee", checkToken, createEmployee);
router.get("/getEmployees", checkToken, getEmployees);
router.post("/getEmployee", checkToken, getEmployee);
router.patch("/updateEmployee", checkToken, updateEmployee);
router.delete("/deleteEmployee", checkToken, deleteEmployee);

module.exports = router;