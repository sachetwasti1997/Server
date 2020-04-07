const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);//---> ('name of collection', 'Schema')
//this command doesn't overrides a collection, only creates it if it doesn't exist

///no eports and hence no require for mongoose


