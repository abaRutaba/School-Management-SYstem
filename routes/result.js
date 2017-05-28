/**
 * Created by rutsh on 4/24/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource ... in result');
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.Result.create({//for entry in table
        Date: post.date
    });

});



module.exports = router;