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
    //res.send('respond with a resource ... in teaching..');
    model.teaching.find({
        where:{id:req.params.id}
    }).then(function(teaching){
        if(teaching){
            res.json(teaching);//.send kry gy to text mme ajae ga
        }
        else
            res.send("teaching not found");
    })

});

router.get('/', function(req, res, next) {
    model.teaching.findAll().then(function(teaching){
        res.json(teaching);
    });
});

router.post('/', function(req, res, next) {
    var post =req.body;

    var teaching1= model.teaching.build({
        teacherId: post.teacherId,
        sectionId: post.sectionId,
        courseId: post.courseId


    });
    teaching1.save();

/*
    model.Teacher.find({
        where:{
            id:post.teacherId
        }
    }).then(function (teacher) {
        if(teacher){
            model.section.find({
                where:{
                    id:post.sectionId
                }
            }).then(function (section) {
                if(section){
                    model.course.find({
                        where:{
                            id:post.courseId
                        }
                    }).then(function (course) {
                        if(course){

                            model.teaching.create().then(function (teaching) {
                                teaching.setTeaching(teaching1);
                            });
                        }
                        else{
                            res.json({"Error":"No such course"});
                        }
                    });
                }
                else{
                    res.json({"Error":"No such section"});
                }
            });
        }
        else{
            res.json({"Error":"No such teacher"});
        }
    });
    model.teaching.create({//for entry in table

    }).then(function(teaching)
    {
        if(Teaching)
        {
            model.teacher.find({
                where:{id:post.teacherId}
            })
                .then(function(Teacher){
                    if(Teacher){
                        model.teaching.setTeacher(Teacher);
                    }
                    res.send("Sucessful");
                })
        }
    });*/

});



module.exports = router;