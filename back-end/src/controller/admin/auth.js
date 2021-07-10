const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) =>{
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(user){
            return res.status(400).json({
            message: 'User already exists'
        });
    } 
    //to add new user
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
            userName : Math.random().toString(),
            role: 'admin'
        });
        
    _user.save((error, data) => {
        if(error){
            return res.status(400).json({
                message: 'Something went wrong !!!'
            });
        }
        if(data){
            return res.status(400).json({
                message: 'Admin Created Successfully !!!'
            });
        }
    })
   });
}

exports.signin = (req, res) =>{
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(error){
            return res.status(400).json({error})
        }
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'admin'){
                 const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: '1h'});
                 const {firstName, lastName, email, role, fullName } = user;
                 res.status(200).json({
                        token,
                        user: {
                            firstName, lastName, email, role, fullName
                        }
                 });
            }
            else{
                return res.status(400).json({
                        message: 'Wrong Credentials'
                 });
            }    
        } 
        else{
            return res.status(400).json({
                message: 'User Does not exist'
         });
        }
   });
}

exports.requiresignin = (req, res, next) =>{
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.decode(token, process.env.SECRET_KEY);
    req.user = user;
    next();
}