const {userService, passwordService, tokenService} = require("../../services");
const {OAuth} = require("../../dataBase");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const users = await userService.findAll(req.query).exec();

            res.json({
                data: users,
            });
        } catch (e) {
            next(e);
        }
    },

    create: async (req, res, next) => {
        try {
            const {userId, password} = req.body;

            const hashPassword = await passwordService.hashPassword(password);
            const newUser = await userService.createOne({...req.body, password: hashPassword});

            console.log(newUser)

            const tokens = tokenService.generateAuthTokens();

            await OAuth.create({
                user: newUser._id,
                ...tokens,
            });

            res.status(201).json({
                ...tokens,
            });


            // After signup add field `id_type` - phone or email

        } catch (e) {
            next(e);
        }
    },

    getById: (dataType = 'user') => async (req, res, next) => {
        try {
            const {user} = req;

            if (dataType === 'favorites') {
                res.json(user.favoriteList);
            } else {
                res.json(user);
            }
        } catch (e) {
            next(e);
        }
    },

    update: async (req, res, next) => {
        try {
            const {id} = req.params;
            let updatedUser;

            if (req.body.favoriteList) {
                updatedUser = await userService.updateFavoriteList({_id: id}, req.body);
            } else {
                updatedUser = await userService.updateOne({_id: id}, req.body);
            }

            res.status(201).json(updatedUser);
        } catch (e) {
            next(e);
        }
    },

    delete: async (req, res, next) => {
        try {
            const {id} = req.params;
            await userService.deleteOne({_id: id});
            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
};
