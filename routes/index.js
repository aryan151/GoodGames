const express = require('express');

const { asyncHandler } = require('./utils');
const { Game, Review } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
    const games = await Game.findAll({
        order: [['createdAt', 'DESC']],
        limit: 10,
        include: Review
    })

    res.render('index', {title: 'Newest Games', games})
}));

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

module.exports = router;
