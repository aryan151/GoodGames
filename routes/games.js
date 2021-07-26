const express = require('express');

const { asyncHandler } = require('./utils');
const { Game, Review, User } = require('../db/models');


const router = express.Router();

router.get('/games', asyncHandler(async (req, res) => {
    const games = await Game.findAll();

    res.render('games', { title: 'Games', games })
}))

router.get('/games/:gameId(\\d+)', asyncHandler(async (req, res) => {
    const gameId = req.params.gameId
    const game = await Game.findByPk(gameId, { include: Review });

    res.render('game-page', { title: `Game - ${game.title}`,  game })
}))

router.post('/api/games/:gameId/reviews', asyncHandler(async (req, res) => {
    // this route will only be hit by our front end javascript file
    // will create a new review and return a list of either:
        // all the current reviews so the page can update dynamically
        // just the new review so the page can update dynamically
    res.send('we are working on it. Promise! :D')
}))


module.exports = router;
