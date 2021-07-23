const {check, validationResult} = require('express-validator');

exports.ValidateSignupRequest= [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),

    check('email')
    .isEmail()
    .withMessage('Valid email is required'),

    check('password')
    .isLength({min : 6})
    .withMessage('Minimum length of password is 6'),

];

exports.ValidateSigninRequest= [

    check('email')
    .isEmail()
    .withMessage('Valid email is required'),

    check('password')
    .isLength({min : 6})
    .withMessage('Minimum length of password is 6'),

];


exports.isRequestValidated = (req, res, next)=>{
    const input = validationResult(req);
    if(input.array().length > 0){
        return res.status(400).json({error: input.array()});
    }
    next()
}