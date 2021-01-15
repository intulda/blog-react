const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.account);
  });

  passport.deserializeUser(async (account, done) => {
    try {
      const user = await User.findOne({ where: { account } });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};