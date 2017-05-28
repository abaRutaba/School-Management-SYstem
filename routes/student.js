/**
 * Created by rutsh on 4/22/2017.
 */
var express = require('express');
var router = express.Router();
var model = require('../models');

router.param("id",function(req, res, next){
    next();
});

router.get('/:id', function(req, res, next)//student/1=>id
{
    model.student.find({
        where:{id:req.params.id}
    }).then(function(student){
        if(student){
            res.json(student);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Student not found");
    })


});
router.get('/', function(req, res, next) {
    model.student.findAll().then(function(students){
        res.json(students);
    });
});

router.post('/', function(req, res, next) {
    var post = req.body;

    var user= model.user.build({
        firstname: post.firstname,
        lastname: post.lastname,
        username: post.username,
        password: post.password,
        dob:post.dob
    });
    user.save();
    model.student.create({//for entry in table

        RollNo: post.RollNo
    }).then(function (student) {
        if (student) {
            student.setUser(user);
            model.section.find({
                where: {id: post.SecId}
            })
                .then(function (Section) {
                    if (Section) {
                        student.setSection(Section);

                    }


                            res.send("Sucessful");

                }
                );
        }
    });
});




module.exports = router;