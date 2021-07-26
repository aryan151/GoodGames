const express = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const { asyncHandler, csrfProtection } = require('./utils');
const { User } = require('../db/models');
const { loginValidators, userValidators } = require('./validators');

const router = express.Router();

/* GET sign up page. */
router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
    const user = User.build();

    res.render('sign-up', { title: 'Sign Up', user, csrfToken: req.csrfToken() })
}));

/* POST sign up page -- login user */
router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const user = User.build({ username, email });

    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => error.msg);
        console.log(errors)
        res.render('sign-up', { title: 'Sign Up', user, csrfToken: req.csrfToken(), errors })
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user.hashedPassword = hashedPassword;

    await user.save();

    // TODO LOGIN THE USER

    res.redirect('/');
}));

module.exports = router;
