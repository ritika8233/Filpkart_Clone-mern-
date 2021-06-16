const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
     firstName: {
        type: String,
        required: true,
        trime: true,
        min: 3,
        max: 20
     },
     lastName: {
        type: String,
        required: true,
        trime: true,
        min: 3,
        max: 20
     },
     userName: {
        type: String,
        required: true,
        trime: true,
        unique: true,
        index: true,
        lowercase: true
     },
     email: {
        type: String,
        required: true,
        trime: true,
        unique: true,
        lowercase: true
     },
     hash_password: {
         type: String,
         required: true
     },
     role: {
        type: String,
        enum: ['user','admin'],
        default: 'admin'
     },
     phone_number: {
         type: String
     },
     profile_picture: {
        type: String 
     },
}, {timeStamps: true});

UserSchema.virtual('password')
.set(function(password){
      this.hash_password = bcrypt.hashSync(password, 10);
});

UserSchema.methods = {
    authenticate : function(password){
       return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', UserSchema);