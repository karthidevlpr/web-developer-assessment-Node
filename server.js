/**
 * Created by karthick on 21/04/17.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 7000;
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

app.use(cors());

app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cookieParser());

require("./server/routes.js")(app);

app.listen(port);
console.log('App is listening on port: ' + port);
