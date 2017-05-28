/**
 * Created by rutsh on 4/23/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.param("id",function(req, res, next){
    next();
});


router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource ... in administrator');
    model.administrator.find({
        where:{id:req.params.id}
    }).then(function(admin){
        if(admin){
            res.json(admin);//.send kry gy to text mme ajae ga
        }
        else
            res.send("Administrator not found");
    })

});
router.get('/', function(req, res, next) {
    model.administrator.findAll().then(function(admin){
        res.json(admin);
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
    model.administrator.create({//for entry in table


    }).then(function (admin) {
            if (admin) {
                admin.setUser(user);


                res.send("Sucessful");

            }
        }
                );
        }
);




router.post('/admin', function(req, res, next) {//showing passowrd
    var post = req.body;
    model.administrator.find({where: {FirstName: post.FirstName}})
        .then(function(a){
            console.log(a.password)
            res.send(a.FirstName,a.LastName,a.PhoneNo,a.Address);
        });

});

router.delete('/:id',function(req,res,next)
{
    var param = req.params;
    model.user.destroy({
        where:{
            id: param.id
        }
    }).then(null);
    //res.json(user);
    res.sendStatus(200);//response is ok ;)
});
module.exports = router;