/**
 * Created by rutsh on 4/26/2017.
 */

var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource ... in section');
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.section
        .create({//for entry in table
            SectionName: post.SectionName
        })
        .then(function(Section){
            if(Section)
            {
                model.classes.find({
                    where:{id:post.classId}
                })
                    .then(function (Class){//class
                        if(Class){//class
                            Section.setClasses(Class);// yaha connect ho rhy hn section and class
/*
 .then(function(teachers){
 if(teachers){
 teachers.setUser(user);
 */
                        }
                        res.send("Sucessful");
            });
            }
    });

});



module.exports = router;