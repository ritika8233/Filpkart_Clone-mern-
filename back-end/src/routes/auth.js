const express = require('express');
const { signup, signin, requiresignin } = require('../controller/auth');
const { ValidateRequest, isRequestValidated, ValidateSigninRequest, ValidateSignupRequest } = require('../validators/auth');
const router = express.Router();

router.post('/signin',ValidateSigninRequest, isRequestValidated,signin);

router.post('/signup', ValidateSignupRequest, isRequestValidated,signup);

router.post('/profile', requiresignin ,(req,res) => {
    res.status(200).json({
        message: 'profile_page'
    });
});

module.exports = router;
