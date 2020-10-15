const express = require("express");
const path = require("path");

const router = express.Router();

const product = [];
router.get("/add-product", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "Views", "add-product.html"));
    res.render("add-product", {
        title: "Add Product",
        path: "/admin/add-product",
    });
});

router.post("/add-product", (req, res, next) => {
    product.push(req.body);
    // console.log(req.body);
    res.redirect("/");
    // res.send(req.body);
});

exports.routes = router;
exports.products = product;