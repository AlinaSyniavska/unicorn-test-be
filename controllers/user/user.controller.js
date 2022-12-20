const {userService, passwordService, tokenService} = require("../../services");
const {OAuth} = require("../../dataBase");
const {creationHelper} = require("../../helpers");

module.exports = {
    create: async (req, res, next) => {
        try {
            const {userId, password} = req.body;

            const hashPassword = await passwordService.hashPassword(password);
            const newUser = await userService.createOne({...req.body, password: hashPassword});

            const tokens = tokenService.generateAuthTokens();

            await OAuth.create({
                user: newUser._id,
                ...tokens,
            });

            res.status(201).json({
                ...tokens,
            });

            const idType = creationHelper.defineType(userId);
            await userService.updateOne({userId}, {idType});

        } catch (e) {
            next(e);
        }
    },

    getOneUser: async (req, res, next) => {
        try {
            const {user} = req;
            const {userId, idType} = user;

            res.json({
                userId,
                idType
            });
        } catch (e) {
            next(e);
        }
    },

};
