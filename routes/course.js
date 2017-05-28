/**
 * Created by rutsh on 4/22/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.param("id",function(req, res, next){
    next();
});



router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource ... in course');
    model.course.find({
        where:{id:req.params.id}
    }).then(function(course){
        if(course){
            res.json(course);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Course not found");
    })

});
router.get('/', function(req, res, next) {
    model.course.findAll().then(function(course){
        res.json(course);
    });
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.course
        .create({//for entry in table
            CourseName: post.CourseName// column name of table , norma variable send by postman(eg rutaba)
        }).then(function(course){
            if(course){
                model.classes.find({
                    where:{id:post.classId}//postman pe deni ha iski entry course k sath
                })
                    .then(function(classes)
                {
                    if(classes){
                        course.setClasses(classes);
                    }
                });
            }
    });

});

//course me classId arhi ha

module.exports = router;