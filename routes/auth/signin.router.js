const signinRouter = require('express').Router();

const {authMiddleware} = require("../../middlewares");
const {authController} = require("../../controllers");

signinRouter.post('/',
    authMiddleware.isLoginBodyValid,
    authMiddleware.isUserPresentForAuth,
    authMiddleware.checkAccessToken,
    authController.login);

module.exports = signinRouter;