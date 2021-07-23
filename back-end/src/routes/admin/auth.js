const express = require('express');
const { signup, signin, requiresignin } = require('../../controller/admin/auth');
const { ValidateSigninRequest, isRequestValidated, ValidateSignupRequest } = require('../../validators/auth');

const router = express.Router();

router.post('/admin/signin' , ValidateSigninRequest, isRequestValidated,signin);

router.post('/admin/signup',ValidateSignupRequest, isRequestValidated, signup);


module.exports = router;
