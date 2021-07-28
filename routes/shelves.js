const express = require('express');
const router = express.Router();


const { check, validationResult } = require('express-validator');
const { shelfValidator } = require('./validators');
const { UserShelf, Game, GamesToShelf, User } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler, csrfProtection } = require('./utils');

router.use(requireAuth)


// GET ALL SHELVES


router.get('/shelves', csrfProtection, asyncHandler(async (req, res, next) => {

    const { userId } = req.session.auth;

    const shelves = await UserShelf.findAll({
        where: { userId: userId },
        include: [{
            model: Game
        }],
        order: [
            [{model: Game}, 'title']
        ]
    })
    res.render('shelves', { title: 'Your Shelves', shelves });
}));

// GET LIST OF USER SHELVES
router.post('/api/shelves', asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;

    const userShelves = await UserShelf.findAll({
        where: {
            userId: userId
        }
    })

    res.json({ userShelves })
}));

// ADD GAME TO SHELF
router.post('/api/shelves/:shelfId/games/:gameId', asyncHandler(async (req, res, next) => {
    const shelfId = req.params.shelfId
    const gameId = req.params.gameId

    const game = await Game.findByPk(gameId);

    game.addUserShelves(shelfId);

    const shelf = await UserShelf.findByPk(shelfId)
    res.status(201).json({ message: `${game.title} was added to: ${shelf.name}`})
}));


// CREATE SHELF
router.post('/shelves', csrfProtection ,shelfValidator, asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const { name } = req.body;

    const shelves = await UserShelf.findAll({
        where: { userId: userId },
        include: [{
            model: Game
        }],
        order: [
            [{model: Game}, 'title']
        ]
    })

    const newShelf = UserShelf.build({
        name: name,
        userId: userId
    })

    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        await newShelf.save();
        res.redirect('/shelves');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('shelves', { title: 'Your Shelves', shelves, csrfToken: req.csrfToken(), errors });
    }
}))

// DELETE SHELF
router.post('/shelves/:id/delete', asyncHandler(async (req, res) => {
    const shelfId = parseInt(req.params.id, 10);

    const shelfToDelete = await UserShelf.findByPk(shelfId);

    const standardtitle = ['Want to play', 'Currently Playing', 'Played']

    if (!standardtitle.includes(shelfToDelete.name))  {
            shelfToDelete.destroy();
    }

    res.redirect('/shelves');
}))


// GET SINGLE SHELF
router.get('/shelves/:id', asyncHandler(async (req, res, next) => {
    const shelfId = parseInt(req.params.id, 10);

    const gameshelf = await UserShelf.findByPk(shelfId, {
        include: [Game, User],
    });

    res.render('shelf-page', { gameshelf })
}))

module.exports = router;
