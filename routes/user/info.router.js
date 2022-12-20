const {userController} = require("../../controllers");
const {authMiddleware, userMiddleware} = require("../../middlewares");

const infoRouter = require('express').Router();

infoRouter.get('/',
    authMiddleware.checkAccessToken,
    userMiddleware.isUserPresent,
    userController.getOneUser);

module.exports = infoRouter;
