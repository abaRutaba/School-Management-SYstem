/**
 * Created by rutsh on 4/23/2017.
 */


var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource ... in schoolaccount');
});

router.post('/', function(req, res, next) {
    var post =req.body;

    model.schoolaccount
        .create({//for entry in table
            AccountNo:post.AccountNo,
            AccountTitle:post.AccountTitle

        }).then(function(account){
            if(account){
                model.campus.find({
                    where:{id:post.campusId}
                })
                .then(function (campus) {
                    if(campus) {
                        model.schoolaccount.setCampus(campus);
                    }
                });
            }

    });

});



module.exports = router;