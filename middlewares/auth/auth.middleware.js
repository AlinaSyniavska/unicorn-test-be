const {authValidator} = require("../../validators");
const {CustomError} = require("../../errors");
const {userService, tokenService} = require("../../services");
const {config} = require("../../configs");
const {OAuth} = require("../../dataBase");

module.exports = {
    isLoginBodyValid: (req, res, next) => {
        try {
            const {error, value} = authValidator.login.validate(req.body);

            if (error) {
                return next(new CustomError('Wrong email or password'));
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserPresentForAuth: async (req, res, next) => {
        try {
            const {userId} = req.body;

            const userById = await userService.findOne({userId});

            if (!userById) {
                return next(new CustomError('Wrong email or password'));
            }

            req.user = userById;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkBearerToken: async (req, res, next) => {
        try {
            let bearerToken = '';
            const authHeader = req.get(config.AUTHORIZATION);

            if (authHeader.startsWith("Bearer ")){
                bearerToken = authHeader.substring(7, authHeader.length);
            } else {
                return next(new CustomError('No token', 401));
            }

            tokenService.checkToken(bearerToken);

            const tokenInfo = await OAuth.findOne({bearer_token: bearerToken}).populate('user');

            if (!tokenInfo) {
                return next(new CustomError('Token not valid', 401));
            }

            req.user = tokenInfo.user;

            next();
        } catch (e) {
            next(e);
        }
    },

};
