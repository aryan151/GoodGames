const express = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const { asyncHandler, csrfProtection } = require('./utils');
const { User, UserShelf } = require('../db/models');
const { loginValidators, userValidators } = require('./validators');
const { loginUser, logoutUser } = require('../auth');

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
        res.render('sign-up', { title: 'Sign Up', user, csrfToken: req.csrfToken(), errors })
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user.hashedPassword = hashedPassword;

    await user.save();

    //make user shelves
    const genDefaultShelves = async (user) =>{
        let userId = user.id

        let wantToPlay = await UserShelf.build({
            name: 'Want to play',
            userId
        })

        let currentlyPlaying = await UserShelf.build({
            name: 'Currently Playing',
            userId
        })

        let played = await UserShelf.build({
            name: 'Played',
            userId
        })

        await wantToPlay.save()
        await currentlyPlaying.save()
        await played.save()
    }

    genDefaultShelves(user)


    // TODO LOGIN THE USER
    loginUser(req, res, user);

    res.redirect('/');
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
    const user = User.build();

    res.render('login', { title: 'Login', user, csrfToken: req.csrfToken() })
}));

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
    const {email, password } = req.body;


    const validationErrors = validationResult(req)

    let errors = []

    if (validationErrors.isEmpty()) {

        const user = await User.findOne({where:{email}})

        if(user){
            const hashedPassword = user.hashedPassword

            let isPassword = await bcrypt.compare(password,hashedPassword)

            if(isPassword){
                //TODO LOGIN THE USER
                loginUser(req, res, user)
                return res.redirect('/');
            }
        }
        errors.push('there was an error with the provided email and password')
    }else{
        errors = validationErrors.array().map(error => error.msg);
    }

    res.render('login', { title: 'Login', email, csrfToken: req.csrfToken(), errors })
}));


router.post('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/');
})

router.post('/demo', asyncHandler(async (req, res, next)=>{
    let demoUser = await User.findByPk(1)

    loginUser(req,res,demoUser)

    res.redirect('/')
}))

module.exports = router;
