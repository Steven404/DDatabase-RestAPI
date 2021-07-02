const { createUser, getUsers, getUserByUsername, deleteUser, logIn } = require ("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createUser", createUser);
router.get("/getUsers", checkToken, getUsers);
router.get("/getUser", checkToken, getUserByUsername);
router.delete("/deleteUser", checkToken, deleteUser);
router.post("/login", logIn);



module.exports = router;