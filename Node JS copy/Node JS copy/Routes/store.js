const express = require("express");
const path = require("path");
const router = express.Router();
const admin = require("./admin");

const products = admin.products;

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "Views", "store.html"));
    res.render("store", {
        prod: products,
        title: "My Store",
        path: "/"
    });
    console.log(products);
});

module.exports = router;