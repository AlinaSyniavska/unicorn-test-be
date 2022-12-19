const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    idType: {
        type: String,
        trim: true
    },

}, {timestamps: true});

module.exports = model('user', UserSchema);
