const logoutRouter = require('express').Router();

const {authController} = require("../../controllers");
const {authMiddleware, commonMiddleware} = require("../../middlewares");
const {queryValidator} = require("../../validators");

logoutRouter.get('/',
    commonMiddleware.isDataValid(queryValidator.logoutParamValidator, 'query'),
    authMiddleware.checkBearerToken,
    authController.logout);

module.exports = logoutRouter;