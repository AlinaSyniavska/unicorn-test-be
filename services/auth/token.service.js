const jwt = require('jsonwebtoken');

const {config} = require("../../configs");
const {CustomError} = require("../../errors");
const {tokenTypeEnum} = require("../../constants");

module.exports = {
    generateAuthTokens: (payload = {}) => {
        const bearer_token = jwt.sign(payload, config.BEARER_TOKEN, {expiresIn: '10m'});

        return {
            bearer_token,
        }
    },

    checkToken: (token = '', tokenType = tokenTypeEnum.BEARER) => {
        try {
            let secret;

            if (tokenType === tokenTypeEnum.BEARER) secret = config.BEARER_TOKEN;

            return jwt.verify(token, secret);
        } catch (e) {
            throw new CustomError('Token not valid', 401);
        }
    },


};
