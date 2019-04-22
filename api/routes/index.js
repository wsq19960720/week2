var express = require('express');
var router = express.Router();
var mongo = require("mongodb-curd");

var db = "week2";
var coll_income = "income";
var coll_pay = "pay"
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/getincome", (req, res, next) => {
    mongo.find(db, coll_income, {}, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})
router.post("/addcome", (req, res, next) => {
    var obj = req.body;
    mongo.insert(db, coll_income, obj, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})
router.post("/del", (req, res, next) => {
    var id = req.body.id;
    mongo.remove(db, coll_income, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})
router.post("/addpay", (req, res, next) => {
    var obj = req.body;
    mongo.insert(db, coll_income, obj, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})
router.post("/getpay", (req, res, next) => {
    mongo.find(db, coll_pay, {}, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})

router.post("/dels", (req, res, next) => {
    var id = req.body.id
    mongo.remove(db, coll_pay, { "_id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                code: 1,
                mes: "success",
                data: result
            })
        }

    })
})


module.exports = router;