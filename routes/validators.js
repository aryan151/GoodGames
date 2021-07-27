const { check } = require('express-validator');
const { User } = require('../db/models');


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
        .exists({checkFalsy: true})
        .withMessage('Please fill in review')
]


module.exports = {
    loginValidators,
    userValidators,
    reviewValidators
}
