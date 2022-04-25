const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

let items = [];

app.get("/", (req, res) => {
    let today = new Date();

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", option);
    res.render("list", {
        Day: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    let item = req.body.newItem;

    items.push(item);
    res.redirect("/");
});






app.listen(3000, () => {
    console.log("server started on port 3000");
});