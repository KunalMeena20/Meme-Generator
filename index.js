const express = require("express");
const path = require("path");
const app = express();
const port = 8080 ;

app.listen(port);

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.get("https://meme-generator-5nbt.onrender.com/meme", (req, res) => {
    res.render("index.ejs");
});

app.get("https://meme-generator-5nbt.onrender.com/meme/edit", (req, res) => {
    res.render("edit.ejs");
})