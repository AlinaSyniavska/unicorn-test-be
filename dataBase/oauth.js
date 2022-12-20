const {Schema, model} = require('mongoose');

const OAuthSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },

    bearer_token: {
        type: String,
        required: true,
    },


}, {timestamps: true});

module.exports = model('oauth', OAuthSchema);
