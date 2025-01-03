const express = require('express');
const route=express.Router();

// route.get("/",(req,res)=>{
//     res.send("User info")
// });

// route.get("/newuser",(req,res)=>{
//     res.send("New User")
// });
// route.get("/:id",(req,res)=>{
//     res.send("New User : "+req.params.id);
// });

route
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        
        res.send(" Retrive Id  value"+req.params.id);
    })
    .put((req,res)=>{
        res.send("Update this is value"+req.params.id);
    })
    .delete((req,res)=>{
        res.send("Delete Id" +req.params.id);
    })

const users=[{name:"raja"},{name:"rani"},{name:"sepoy"}];

route.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id]
    next();
})

module.exports=route;