
const userRouter = require('express').Router();

/*userRouter.get('/',
    commonMiddleware.isDataValid(queryValidator.allUsersValidator, 'query'),
    userController.getAll);
userRouter.post('/',
    commonMiddleware.isDataValid(userValidator.newUserValidator),
    userMiddleware.isUserUniq,
    userController.create);

userRouter.get('/favoriteList/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    userController.getFavoriteListById);

userRouter.get('/full/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isPopulatedUserPresent,
    userController.getById('favorites'));

userRouter.get('/:id',
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    userController.getById());
userRouter.patch('/:id',
    commonMiddleware.isIdValid,
    authMiddleware.checkAccessToken,
    commonMiddleware.isDataValid(userValidator.updateUserValidator),
    userMiddleware.isUserPresent,
    userController.update);
userRouter.delete('/:id',
    commonMiddleware.isIdValid,
    authMiddleware.checkAccessToken,
    userMiddleware.isUserPresent,
    userController.delete);*/

module.exports = userRouter;
