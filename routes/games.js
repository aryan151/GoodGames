const express = require('express');

const { Op } = require('sequelize');

const { asyncHandler } = require('./utils');
const { Game, Review, User } = require('../db/models');
const { reviewValidators, jsonValidationHandler } = require('./validators');
const sequelize = require('sequelize');


const router = express.Router();

router.get('/games', asyncHandler(async (req, res) => {
    const games = await Game.findAll();

    games.forEach(game => {
        getDate(game)
    });

    res.render('games', { title: 'Games', games })
}))

router.get('/games/:gameId(\\d+)', asyncHandler(async (req, res) => {
    const gameId = req.params.gameId;
    const game = await Game.findByPk(gameId, {
        group: ['Game.id', 'Reviews.id', "Reviews->User.id"],
        include: {
            model: Review,
            attributes: [[sequelize.fn('SUM', sequelize.col('Reviews.rating')), 'count']],
            // attributes: [[sequelize.fn('sum', sequelize.col('rating')), 'sum']],
            include: User,
        }
    });
    console.log(game);
    getDate(game);

    res.render('game-page', { title: `Game - ${game.title}`, game })
}))

router.post('/api/games/:gameId(\\d+)/reviews', reviewValidators, jsonValidationHandler, asyncHandler(async (req, res) => {
    // this route will only be hit by our front end javascript file
    // will create a new review and return the new review
    console.log('hit this route')
    const userId = res.locals.user.id
    const user = await User.findByPk(userId);

    const { content, rating } = req.body;
    const gameId = req.params.gameId;
    const review = await Review.create({
        content,
        rating,
        userId,
        gameId,
    })

    res.status(201).json({ review, user });
}))


// DELETE GAME FROM SHELF
router.post('/games/:gameId/delete', asyncHandler(async (req, res) => {
    const gameId = parseInt(req.params.gameId, 10);
    const { shelfId } = req.body;

    const game = await Game.findByPk(gameId);

    await game.removeUserShelves(shelfId)

    res.redirect(`/shelves/${shelfId}`)
}))


const getDate = (game) => {
    const date = new Date(game.releaseDate);
    const month = date.getMonth();
    const day = date.getDay() + 1
    const year = date.getFullYear();
    game.date = `${month}/${day}/${year}`
}

router.post('/search', asyncHandler(async (req, res) => {
    const { term } = req.body
    let games = await Game.findAll({
        where:
        {
            title: { [Op.iLike]: '%' + term + '%' }
        }
    })
    res.render('search-result', {Title:`Search Results "${term}"`,games,term})
}))

module.exports = router;
