const express = require('express');

const { asyncHandler } = require('./utils');
const { Game, Review } = require('../db/models');
const { getAvgRating } = require('./games');
const sequelize = require('sequelize');

const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
    const games = await Game.findAll({
        order: [['releaseDate', 'DESC']],
        limit: 10,
    })

    for (const game of games) {
        game.avg = await getAvgRating(game)
    }

    res.render('index', {title: 'Newest Games', games})
}));

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

module.exports = router;
