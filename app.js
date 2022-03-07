const express = require("express");

const app = express();

app.get("/books", function(req,res){

    console.log("Atomic Habits, Alchemist , War and Peace, Wings of Fire");
});

app.listen(6002, () => {

    console.log("Listening to port 6002");
});