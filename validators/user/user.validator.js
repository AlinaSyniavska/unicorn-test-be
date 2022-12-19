const Joi = require('joi');

const {idTypeEnum, regexEnum} = require("../../constants");
const {passwordValidator} = require("../common/common.validator");

module.exports = {
  newUserValidator: Joi.object({
    userId: Joi.alternatives().try(Joi.string().regex(regexEnum.EMAIL), Joi.string().regex(regexEnum.PHONE)).required(),
    password: passwordValidator.required(),
    idType: Joi.string().valid(...Object.values(idTypeEnum)).trim(),
  }),
};



