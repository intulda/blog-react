const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

router.post('/signUp', async (req, res, next) => {
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
    });
    res.status(201).send('success');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;