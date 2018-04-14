var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

/* GET home page. */

router.get('/p1', function (req, res) {
    res.render('p1');
});


router.get("/login", function(req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {

});


router.post('/p2', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'e';
    console.log(answer);
    console.log("id: " + req.param.id);

    if (answer === expected) {
        res.redirect('2ab1d69472808000148394c0');
    } else {
        res.redirect('p1');
    }
});

router.post('/p3', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'centennial';
    console.log(answer);
    console.log("id: " + req.param.id);

    if (answer === expected) {
        res.redirect('3ab915ed94802400143a7631');
    } else {
        res.redirect('2ab1d69472808000148394c0');
    }
});

router.post('/p4', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'glow like dat';

    if (answer === expected) {
        res.redirect('4ab1d69472af780014839ygp');
    } else {
        res.redirect('3ab915ed94802400143a7631');
    }
});

router.post('/p5', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = '';

    if (answer === expected) {
        res.redirect('5ab1d69472af780014832wac');
    } else {
        res.redirect('4ab1d69472af780014839ygp');
    }
});

router.post('/p6', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = '30';

    if (answer === expected) {
        res.redirect('6ab1d694728082cz148394fa');
    } else {
        res.redirect('5ab1d69472af780014832wac');
    }
});

router.post('/p7', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'ohyeah';

    if (answer === expected) {
        res.redirect('7ab1d69472808fig1483949g');
    } else {
        res.redirect('6ab1d694728082cz148394fa');
    }
});


router.post('/p8', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'vziapvowaqp';

    if (answer === expected) {
        res.redirect('8ab1e29472808f9014833rs0');
    } else {
        res.redirect('7ab1d69472808fig1483949g');
    }
});

router.post('/p9', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'incorrect';

    if (answer === expected) {
        res.redirect('9ab1d694728081s0148394ee');
    } else {
        res.redirect('8ab1e29472808f9014833rs0');
    }
});

router.post('/p10', function (req, res) {

    var answer = req.body.answer;
    answer = answer.toLowerCase();
    var expected = 'mountain dew';

    if (answer === expected) {
        res.redirect('finish');
    } else {
        res.redirect('9ab1d694728081s0148394ee');
    }
});


router.get('/', function(req, res, next) {
    console.log("/");
    res.render('index', { title: 'The game of Theta Tau: Season Two' });
});

module.exports = router;
