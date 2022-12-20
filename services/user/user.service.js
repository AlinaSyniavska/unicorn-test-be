const {User} = require("../../dataBase");

module.exports = {
    findOne: (params = {}) => {
        return User.findOne(params);
    },

    createOne: (user) => {
        return User.create(user);
    },

    updateOne: (params = {}, userData, options = {new: true}) => {
        return User.findOneAndUpdate(params, userData, options);
    },
}
