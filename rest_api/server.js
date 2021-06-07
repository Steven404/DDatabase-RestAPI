require('dotenv').config();

const express = require('express');
const app = express();
const userRouter = require("./api/users/user.router");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api/users", userRouter);
app.get('/api', (req,res)=>{
    res.json({
        success: 1,
        message: "Successfully connected to the API"
    });
});

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT : ", process.env.APP_PORT);
});