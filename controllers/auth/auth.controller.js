const {passwordService} = require("../../services");
const {OAuth} = require("../../dataBase");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { password: hashPassword } = req.user;
      const { password } = req.body;

      await passwordService.comparePassword(hashPassword, password);

      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      // const { access_token } = req;
      // const { email, name } = user;
      const { access_token } = req;

      await OAuth.deleteOne({ access_token });

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },

  logoutAllDevices: async (req, res, next) => {
    try {
      // const { _id, email, name } = req.user;
      const { _id } = req.user;

      const { deletedCount } = await OAuth.deleteMany({ userId: _id });
      console.log(deletedCount);

      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },


};
