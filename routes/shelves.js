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

// DELETE SHELF
router.post('/shelves/:id/delete', asyncHandler(async (req, res) => {
    const shelfId = parseInt(req.params.id, 10);

    const shelfToDelete = await UserShelf.findByPk(shelfId);

    shelfToDelete.destroy();

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
