const Joi = require("joi");

module.exports = {
    logoutParamValidator: Joi.object({
        all: Joi.boolean(),
    }),
};
