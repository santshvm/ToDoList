// require the packages that are required - express and body parser 
const express = require("express");
const bodyParser = require("body-parser");
var items = [];
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long", 
        day: "numeric", 
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {today:day, newItemListArray:items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function() {
    console.log("Server running at port 3000");;
});


