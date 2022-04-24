const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});






app.listen(3000, () => {
    console.log ("server started on port 3000");
});