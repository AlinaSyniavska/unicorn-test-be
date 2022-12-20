const {passwordService, tokenService} = require("../../services");
const {OAuth} = require("../../dataBase");

module.exports = {
    login: async (req, res, next) => {
        try {
            const {password: hashPassword, _id} = req.user;
            const {password} = req.body;

            await passwordService.comparePassword(hashPassword, password);

            const tokens = tokenService.generateAuthTokens();

            await OAuth.create({
                user: _id,
                ...tokens,
            });

            res.json({
                ...tokens,
            });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const {bearer_token} = req;
            const {_id} = req.user;
            const {all} = req.query;

            if (!all) {
                await OAuth.deleteOne({bearer_token});
            } else {
                const {deletedCount} = await OAuth.deleteMany({user: _id});
                console.log(deletedCount)
            }

            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },

};
