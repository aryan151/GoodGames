const express = require('express');
const router = express.Router();


const { check, validationResult } = require('express-validator');
const { shelfValidator } = require('./validators');
const { UserShelf, Game, GamesToShelf, User } = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler, csrfProtection } = require('./utils');

router.use(requireAuth)


// GET ALL SHELVES
router.get('/shelves', csrfProtection ,asyncHandler(async (req, res, next) => {
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
    res.render('shelves', { title: 'Your Shelves', shelves, csrfToken: req.csrfToken() });
}));


router.post('/api/shelves', asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;

    const {gameId, usershelf} = req.body;

    let newShelf = await GamesToShelf.create({
        gameId: gameId,
        userShelfId: usershelf
    })


    res.json(shelves)

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

router.get('/edit', asyncHandler(async (req, res) =>{

const { userId } = req.session.auth;

const gameshelves = await UserShelf.findAll({
    where: {
        userId: userId,
        name:  ['Currently Playing', 'Want to Play', 'Played']
    }
})

const customShelves = await UserShelf.findAll({
    where: {
        userId: userId,
        name: {
            [Op.notIn]: ['Currently Playing', 'Want to Play', 'Played']
        }
    },
    // order: [{
    //     "name"
    // }]
})

res.render('shelves-edit', { gameshelves, customShelves });

}))


// GET SINGLE SHELF
router.get('/shelves/:id', requireAuth, asyncHandler(async (req, res, next) => {
    const shelfId = parseInt(req.params.id, 10);

    const gameshelf = await UserShelf.findByPk(shelfId, {
        include: [Game, User],
    });

    res.render('shelf-page', { gameshelf })
}))

module.exports = router;
