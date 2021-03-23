const express = require('express');
const app = new express();
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

let loginDetails = [];
console.log(loginDetails);

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/fetch/:num",(req,res)=>{
    let num = parseInt(req.params.num);
    if(num <1 || num >12) {
        res.send("Not a valid month number")
    } else {
        res.send(monthNames[num-1])
    }
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

