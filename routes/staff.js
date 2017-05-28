/**
 * Created by rutsh on 4/23/2017.
 */

var express = require('express');
var router = express.Router();
var model = require('../models');

router.param("id",function(req, res, next){
    next();
});
router.get('/:id', function(req, res, next)//student/1=>id
{
    model.staff.find({
        where:{id:req.params.id}
    }).then(function(staff){
        if(staff){
            res.json(staff);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Staff not found");
    })


});


router.get('/', function(req, res, next) {
    model.staff.findAll().then(function(staffs){
        res.json(staffs);
    });
});


router.post('/', function(req, res, next) {
    var post =req.body;

    var user=
    model.user.build
        ({//for entry in table
            firstname: post.firstname,
            lastname: post.lastname,
            username: post.username,
            password: post.password,
            dob:post.dob
        });
    user.save();
    model.staff.create({
        Salary:post.Salary,// comma ki waja se entry ho rhi ha wese nhi ho rhi ti :o
    }).then(function(staff){
        if(staff){
            staff.setUser(user);

        }
    });
});




module.exports = router;
