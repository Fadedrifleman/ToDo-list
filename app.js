const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    var today = new Date();

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", option);
    res.render("list", {
        Day: day
    });
});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    console.log(item);
});






app.listen(3000, () => {
    console.log("server started on port 3000");
});