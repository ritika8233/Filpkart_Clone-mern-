const User = require('../models/user');
const { model } = require("mongoose");

exports.signup = (req, res) =>{
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(user){
            return res.status(400).json({
            message: 'User already exists'
        });
    }
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            userName : Math.random().toString()
        });
        
    _user.save((error, data) => {
        if(error){
            return res.status(400).json({
                message: 'Something went wrong !!!'
            });
        }
        if(data){
            return res.status(400).json({
                message: 'User Created Successfully !!!'
            });
        }
    })
   });

}