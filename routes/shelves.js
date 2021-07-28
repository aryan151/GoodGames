const express = require('express');
const router = express.Router();


const { check, validationResult } = require('express-validator');
const { reviewValidators, userValidators } = require('./validators');
const { UserShelf, Game, GamesToShelf} = require('../db/models');
const { requireAuth } = require('../auth');
const { asyncHandler } = require('./utils');

router.get('/shelves', asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;

    const games = await Game.findAll({
        order: [
            'title'
        ]
    });

    const shelves = await UserShelf.findAll({
        where: { userId: userId },
        include: [{
            model: Game
        }],
        order: [
            [{model: Game}, 'title']
        ]
    })
    res.render('shelves', { shelves, games});

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


const shelfValidator = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Shelf Title')
        .isLength({ max: 30 })
        .withMessage('Name cannot be more than 30 characters')
]



router.post('/shelves', shelfValidator, asyncHandler(async (req, res, next) => {
    // const { userId } = req.session.auth;
    const userId = 1
    const { name } = req.body;

    const games = await Game.findAll({
        order: [
            'title'
        ]
    })

    const shelves = await UserShelf.findAll({
        where: { userId: userId},
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
        res.render('shelves', { shelves, games, errors });

    }

}))

router.get('/edit', requireAuth, asyncHandler(async (req, res) =>{

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



router.get('shelves/:id', requireAuth, asyncHandler(async (req, res) =>{

    const shelfId = parseInt(req.params.id, 10);
    const {userId} = req.session.auth;
    const gameshelf = await UserShelf.findByPk(shelfId, {
        include: Game,
    })

    const games = await Game.findAll({
        order: [
            'title'
        ]
    })

    const shelves = await UserShelf.findAll({
        where: {
            userId: userId,
        },
        include: [{
            model: Game
        }],
        order: [
            [{model: Game}, 'title']
        ]

    })

    const shelf = await UserShelf.findByPk(shelfId)

    res.render('shelves-list', {shelves, gameshelf, shelf})



}))







module.exports = router;
