const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./Routes/admin");
const storeRoutes = require("./Routes/store");
const calculator = require("./calc");
const path = require("path");

const app = express(); //initialized express app object

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin.routes);     // filtering

app.use(storeRoutes);

app.use(calculator);

app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
    // res.statusCode = 404;
    // res.send("Page not found");
    // res.status(404).send(`<h1>Page Not Found!</h1>`);
    res.render("404", {
        title: "Page Not Found"
    });
});

app.listen(3000);