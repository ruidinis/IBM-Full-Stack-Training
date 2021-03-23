const express = require('express');
const app = new express();

app.get("/", (req,res) => {
    return res.send("Hello World!");
});

app.get("/Hello", (req,res) => {
    return res.send("Hi Sir!! How are you doing?");
});

let server = app.listen(8080, () => {
    console.log("listening at http://"+ server.address().address +":"+server.address().port)
})