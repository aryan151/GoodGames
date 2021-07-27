const { check, validationResult } = require('express-validator');
const { User, Review, Game } = require('../db/models');
const { Op } = require("sequelize");




const userValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username must not be null or empty')
        .isLength({ max: 50 })
        .withMessage('Username must be less then 50 characters'),
    check('email')
        .isEmail()
        .withMessage('Must provide a valid email address')
        .exists({ checkFalsy: true })
        .withMessage('Email address must not be null or empty')
        .isLength({ max: 255 })
        .withMessage('Email must be less than 255 characters')
        .custom((value) => {
            return User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('The provided Email Address is already in use by another account');
                    }
                });
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Must provide a password')
        .isLength({ max: 50 })
        .withMessage('Password must be less than 50 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Must confirm your password')
        .isLength({ max: 50 })
        .withMessage('Password must be less than 50 characters')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        })
];


const loginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for your email address'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
];

const reviewValidators = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please content for your review'),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a rating')
        .isInt({ min: 1, max: 5 })
        .withMessage('Please provide a rating value between 1 and 5'),
    check('userId')
        .exists({ checkFalsy: true })
        .withMessage('Must provide userId for this request')
        .custom(value => {
            return User.findByPk(value)
                .then(user => {
                    if (!user) {
                        return Promise.reject(`User does not exist. userId provided: ${value}`)
                    }
                })
        })
        .custom((value, { req }) => {
            return Review.findOne({
                where: {
                    [Op.and]: [{ userId: value }, { gameId: req.params.gameId }]
                }
            })
                .then(review => {
                    if (review) {
                        return Promise.reject('You already have a review for this game');
                    }
                })
        })
        .custom((value, {req}) => {
            return Game.findByPk(Number(req.params.gameId))
                .then(game => {
                    if (!game) {
                        return Promise.reject(`Game does not exist. gameId provided through path: ${req.params.gameId}`)
                    }
                })
        }),
];

const jsonValidationHandler = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()){
        const errors = validationErrors.array().map(error => error.msg);
        const err = Error('Bad Request');
        err.errors = errors;
        err.status = 400;
        res.status = 400;
        err.title = 'Bad Request'
        res.json({
            title: err.title,
            message: err.message,
            errors: err.errors,
            stack: err.stack
        })
    }
    next();
}


module.exports = {
    loginValidators,
    userValidators,
    reviewValidators,
    jsonValidationHandler,
}
