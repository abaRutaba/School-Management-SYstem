/**
 * Created by rutsh on 4/27/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');
router.param("id",function(req, res, next){
    next();
});

router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource ... in classes');
    model.classes.find({
        where:{id:req.params.id}
    }).then(function(classes){
        if(classes){
            res.json(classes);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Class not found");
    })

});
router.get('/', function(req, res, next) {
    model.classes.findAll().then(function(classes){
        res.json(classes);
    });
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.classes
        .create({//for entry in table
            ClassName: post.ClassName
    });

});



module.exports = router;