const express = require("express");

const app = express();

app.get("/home", function(req , res){

    console.log("Hello user");
})

app.listen(5003, () => {

    console.log("Listening to port 5003");
});