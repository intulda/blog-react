const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post, User, Hashtag, Comment } = require('../models');
const { isLoggedIn } = require('./middlewraes');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

router.get('/:id/detail', async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User,
                attributes: { exclude: ['password'] },
            },{
                model: Comment,
            }]
        });
        res.status(200).json(post);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

router.get('/postList', async (req, res, next) => {
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) {
            console.log(req.query.lastId);
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
        };
        const posts = await Post.findAll({
            where,
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [{
                model: User,
                attributes: { exclude: ['password'] },
            },{
                model: Hashtag,
            },{
                model: Comment,
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
        const hashtags = await db.sequelize.query(`
            SELECT id,
                   name,
                   A.count
            FROM Hashtags,
                 (SELECT HashtagId,
                         COUNT(HashtagId) count
                  FROM PostHashtag
                  GROUP BY HashtagId) A
            WHERE A.HashtagId = id
            UNION ALL
            SELECT
               0,
               'totalCount',
               COUNT(*)
            FROM Posts
        `, {
            type: db.sequelize.QueryTypes.SELECT,
            raw: true,
        })
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
            UserId: req.user.id,
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
        const fullPost = await Post.findOne({
            where: {
                id: post.id
            },
            include: [{
                model: User,
                attributes: { exclude: ['password'] },
            },{
                model: Comment,
            },{
                model: Hashtag,
            }]
        });
        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;