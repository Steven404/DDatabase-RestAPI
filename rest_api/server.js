require('dotenv').config();

const express = require('express');
const app = express();



app.get('/api', (req,res)=>{
    res.json({
        success: 1,
        message: "Successfully connected to the API"
    });
});

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT : ", process.env.APP_PORT);
});