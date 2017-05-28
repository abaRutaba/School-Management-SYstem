var express = require('express');
var router = express.Router();
var model = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //console.log('hi');
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var post =req.body;

  model.user.create({//for entry in table
      firstname: post.firstname,
      lastname:post.lastname,
      username:post.username,
      password:post.password,
      dob:post.dob
  });

});

router.post('/login', function(req, res, next) {//showing passowrd
    var post = req.body;
    model.user.find({where: {username: post.username}})
        .then(function(u){
            if(u){
                if(u.password==post.password){
                    res.sendStatus(200);//sucessful
                }
                else{
                    res.sendStatus(404);//not found or wrong password
                }
            }else{
                res.sendStatus(400);//bad request
            }
        });

});


module.exports = router;
