const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'account',
    passwordField: 'password',
  }, async (account, password, done) => {
    try {
      const user = await User.findOne({
        where: { account }
      });
      if(!user) {
        //첫번째 서버 에러, 성공, 클라이언트 에러
        return done(null, false, { reason: '존재하지 않는 사용자 입니다.'});
      }
      const result = await bcrypt.compare(password, user.password);
      if(result) {
        return done(null, user);
      }

      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
    } catch (error) {
      console.error(error);
      return done(error);
    }
  }));
};