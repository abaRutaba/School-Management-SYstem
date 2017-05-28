/**
 * Created by rutsh on 4/23/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource ... in campus');
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.campus
        .create({//foxr entry in table
            PhoneNo:post.PhoneNo,
            Address:post.Address
        });
    res.send("Sucessful");
});



module.exports = router;