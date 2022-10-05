// require the packages that are required - express and body parser 
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

var date = new Date();
var currentDay = date.getDay();
var day = "";

app.get("/", function(req, res) {
    if(currentDay === 1) {
        day = "Monday";
    }
    else if(currentDay === 2) {
        day = "Tuesday";
    }
    else if(currentDay === 3) {
        day = "Wednesday";
    }
    else if(currentDay === 4) {
        day = "Thursday";
    }
    else if(currentDay === 5) {
        day = "Friday";
    }
    else if(currentDay === 6) {
        day = "Saturday";
    }
    else {
        day = "Sunday";
    }
    res.render("list", {today:day});
});

app.listen(3000, function() {
    console.log("Server running at port 3000");;
});


