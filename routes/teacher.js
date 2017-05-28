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
    model.Teacher.find({
        where:{id:req.params.id}
    }).then(function(teacher){
        if(teacher){
            res.json(teacher);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Tecaher not found");
    })


});

router.get('/', function(req, res, next) {
    //res.send('respond with a resource ... in teacher');
    model.Teacher.findAll().then(function(teachers)
    {
        res.json(teachers);
    });
});

router.post('/', function(req, res, next) {
    var post =req.body;
    var user= model.user.build({
        firstname: post.firstname,
        lastname: post.lastname,
        username: post.username,
        password: post.password,
        dob:post.dob
    });
    user.save();
    model.Teacher.create(
        {//for entry in table
            Salary:post.Salary,
    }).then(function(teachers){
        if(teachers){
            teachers.setUser(user);


        }
        res.send("Sucessful");
    });

});



module.exports = router;