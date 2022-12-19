const signupRouter = require('express').Router();

const {commonMiddleware, userMiddleware} = require("../../middlewares");
const {userValidator} = require("../../validators");
const {userController} = require("../../controllers");

signupRouter.post('/',
    commonMiddleware.isDataValid(userValidator.newUserValidator),
    userMiddleware.isUserUniq,
    userController.create);

module.exports = signupRouter;