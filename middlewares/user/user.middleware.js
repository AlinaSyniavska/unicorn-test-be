const {userService} = require("../../services");
const {CustomError} = require("../../errors");

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const {id} = req.params;

            const user = await userService.findOne({_id: id});

            if (!user) {
                return next(new CustomError(`User with id ${id} not found`, 404));
            }

            req.user = user;
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
                return next(new CustomError(`User with email ${userId} is exist`, 409));
            }

            // req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

};
