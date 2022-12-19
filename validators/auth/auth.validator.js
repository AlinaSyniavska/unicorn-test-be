const Joi = require('joi');

const {passwordValidator} = require("../common/common.validator");
const {regexEnum} = require("../../constants");

module.exports = {
    login: Joi.object({
        userId: Joi.alternatives().try(Joi.string().regex(regexEnum.EMAIL), Joi.string().regex(regexEnum.PHONE)).required(),
        password: passwordValidator.required(),
    }),
};

