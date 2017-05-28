/**
 * Created by rutsh on 4/24/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource ... in exam');
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.exam.create({//for entry in table
        StartingDate: post.StartingDate,
        EndingDate:post.EndingDate
    });

});



module.exports = router;