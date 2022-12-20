const {userService, passwordService} = require("../../services");
const {creationHelper} = require("../../helpers");

module.exports = {
    create: async (req, res, next) => {
        try {
            const {userId, password} = req.body;

            const hashPassword = await passwordService.hashPassword(password);
            await userService.createOne({...req.body, password: hashPassword});

            const idType = creationHelper.defineType(userId);
            const newUser = await userService.updateOne({userId}, {idType});

            res.status(201).json(newUser);
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
