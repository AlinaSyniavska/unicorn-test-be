const {userController} = require("../../controllers");
const {authMiddleware, userMiddleware} = require("../../middlewares");

const infoRouter = require('express').Router();

infoRouter.get('/',
    authMiddleware.checkBearerToken,
    userMiddleware.isUserPresent,
    userController.getOneUser);

module.exports = infoRouter;
