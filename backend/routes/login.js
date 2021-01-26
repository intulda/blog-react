const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewraes');

router.get('/myInformation', async (req, res, next) => {
  try {
    console.log('reqUser', req.user);
    if(req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: { exclude: ['password'] },
        include: [{
          model: Comment,
        },{
          model: Post,
        }],
      });
      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//middlewrare 확장개념
router.post('/loginReq', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const userWithoutPassword = await User.findOne({
        where: { account: user.account },
        attributes: { exclude: ['password'] },
        include: [{
          model: Comment,
        },{
          model: Post,
        }]
      })

      return res.status(200).json(userWithoutPassword);
    });
  })(req, res, next);
});

router.post('/signUp', isNotLoggedIn, async (req, res, next) => {
  try {
    const exAccount = await User.findOne({
      where: {
        account: req.body.account,
      }
    });

    if(exAccount) {
      return res.status(403).send('이미 사용중인 아이디 입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      account: req.body.account,
      nickname: req.body.nickname,
      password: hashedPassword,
      authentication: req.body.account == 'intulda' ? 'ADMIN' : 'USER',
    });
    res.status(201).send('가입되었습니다.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/logoutReq', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('로그아웃 되었습니다.');
});

module.exports = router;