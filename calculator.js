// jshint esversion:6

const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended : true}));
//app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result = " + result);
});

app.post("/bmiCalculator", function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = (weight/((height/100)^2)).toFixed(1);
    res.send("Your BMI is : " + result);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});