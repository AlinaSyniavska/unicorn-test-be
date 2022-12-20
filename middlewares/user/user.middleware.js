const {userService} = require("../../services");
const {CustomError} = require("../../errors");

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const {user} = req;

            const userFromDB = await userService.findOne({userId: user.userId});

            if (!userFromDB) {
                return next(new CustomError(`User with id ${user.userId} not found`, 404));
            }

            req.user = userFromDB;
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserUniq: async (req, res, next) => {
        try {
            const {userId} = req.body;

            const user = await userService.findOne({userId});

            if (user) {
                return next(new CustomError(`User with id ${userId} is exist`, 409));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

};
