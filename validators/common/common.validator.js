const Joi = require("joi");

const {regexEnum} = require("../../constants");

module.exports = {
    emailValidator: Joi.string().regex(regexEnum.EMAIL).lowercase().trim(true),
    passwordValidator: Joi.string().regex(regexEnum.PASSWORD),
    phoneValidator: Joi.string().regex(regexEnum.PHONE).trim(),
}