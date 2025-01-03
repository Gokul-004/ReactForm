const express=require('express');

const app=express();


app.set('view engine','ejs')                    // To Set Defalut Engine

app.get("/",(req,res)=>{
    console.log("Hai");
    // res.status(500).send("Hello World");
    // res.status(200).send({error:"Error Message"});
    //res.json({express:"Learning express"});
    // res.send("Hello Gokul");
    res.send("Naruto");
})
const userRoute = require('./Routes/user.js');
app.use('/user',userRoute);
app.listen(3000);