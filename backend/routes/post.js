const express = require('express');
const router = express.Router();
const { Post, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewraes');
const Sequelize = require('sequelize');

router.get('/postList', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
            },{
                model: Hashtag,
            }]
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    };
});

router.get('/hashtagList', async (req, res, next) => {
    try {
        const hashtags = await Hashtag.findAll({
            attributes: {
                include: [[Sequelize.fn('COUNT'), Sequelize.col('hashtag.id')]]
            },
            include: {
                model: Post,
                attributes: [],
            }
        });
        res.status(200).json(hashtags);
    } catch (error) {
        console.error(error);
        next(error);
    };
});

router.post('/addPost', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            contentHTML: req.body.contentHTML,
            userId: req.user.account
        });
        const hashtag = req.body.content.match(/#[^\s#]+/g);
        if(hashtag) {
            const result = await Promise.all(hashtag.map((tag) => Hashtag.findOrCreate({
                where: {
                    name: tag.slice(1).toLowerCase(),
                }
            })));
            await post.addHashtags(result.map((v) => v[0]));
        }
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;