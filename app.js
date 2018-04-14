var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ejs = require("ejs");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var url = process.env.DATABASEURL || "mongodb://localhost/theta_tau"
mongoose.connect(url);

var passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    User            = require("./models/user"),
    flash           = require("connect-flash");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var router2 = require('./routes/2ab1d69472808000148394c0');
var router3 = require('./routes/3ab915ed94802400143a7631');
var router4 = require('./routes/4ab1d69472af780014839ygp');
var router5 = require('./routes/5ab1d69472af780014832wac');
var router6 = require('./routes/6ab1d694728082cz148394fa');
var router7 = require('./routes/7ab1d69472808fig1483949g');
var router8 = require('./routes/8ab1e29472808f9014833rs0');
var router9 = require('./routes/9ab1d694728081s0148394ee');
var routerFinish = require('./routes/finish');

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require("express-session")({
    secret: "a secret message",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// pass currentUser into every page
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("succes");
    next();
});
app.use(methodOverride("_method"));



app.use('/2ab1d69472808000148394c0', router2);
app.use('/3ab915ed94802400143a7631', router3);
app.use('/4ab1d69472af780014839ygp', router4);
app.use('/5ab1d69472af780014832wac', router5);
app.use('/6ab1d694728082cz148394fa', router6);
app.use('/7ab1d69472808fig1483949g', router7);
app.use('/8ab1e29472808f9014833rs0', router8);
app.use('/9ab1d694728081s0148394ee', router9);
app.use('/finish', routerFinish);

app.use('/', indexRouter);
app.use('/users', usersRouter);


// registrations
var user1 = new User({username: 'team1'});
User.register(user1, 'ok', function (err, user) {
    if (err) {
        console.log("error registering");
    } else {
        console.log("user1 registered");
    }
});

var user2 = new User({username: 'team2'});
User.register(user2, 'here', function (err, user) {
    if (err) {
        console.log("error registering");
    } else {
        console.log("user2 registered");
    }
});

var user3 = new User({username: 'team3'});
User.register(user3, 'we', function (err, user) {
    if (err) {
        console.log("error registering");
    } else {
        console.log("user3 registered");
    }
});

var user4 = new User({username: 'team4'});
User.register(user4, 'go', function (err, user) {
    if (err) {
        console.log("error registering");
    } else {
        console.log("user4 registered");
    }
});

var root = new User({username: 'root'});
User.register(root, 'admin', function (err, user) {
    if (err) {
        console.log("error registering");
    } else {
        console.log("root registered");
    }
});




module.exports = app;

var listener = app.listen(process.env.PORT || 3001, process.env.IP, function() {
    console.log("Port number: " + listener.address.port);
    console.log("IP Address: " + listener.address.ip);
});

