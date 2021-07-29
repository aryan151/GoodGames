const express = require('express');

const { asyncHandler , csrfProtection} = require('./utils');
const { requireAuth } = require('../auth');
const { Game, Review, User ,} = require('../db/models');
const {reviewEditValidators} = require('./validators')
const { validationResult } = require('express-validator');


const router = express.Router();

router.get('/reviews', requireAuth, asyncHandler(async (req,res,next)=>{
    const {userId} = req.session.auth

    let reviews = await Review.findAll({
        where: {userId},
        include:[
            {model: Game},
            {model: User}
        ]
    })

    res.render('review',{title: 'Your Reviews',reviews})
}))

router.get('/reviews/:id(\\d+)', asyncHandler(async (req,res,next)=>{
    const id = req.params.id
    let review = await Review.findByPk(id, {
        include:[
            {model: Game},
            {model: User}
        ]
    })

    let content = review.content
    let rating = review.rating

    res.render('review-edit', {title: 'Edit Review',review,content,rating})
}))

router.post('/reviews/:id(\\d+)/edit', reviewEditValidators ,asyncHandler(async (req,res,next)=>{
    const id = req.params.id
    const {content, rating} = req.body
    let review = await Review.findByPk(id)

    let {history} = req.session



    let redirectTarget = history[2].split('http://localhost:8080')[1]


    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => error.msg);
        console.log(errors)
        // res.render('review-edit', { title: 'Edit Review', review,  errors })
        return;
    }

    review.content = content
    review.rating = rating
    review.save()
    res.redirect(redirectTarget)
}))

router.post('/reviews/:id(\\d+)/delete', asyncHandler(async (req,res,next)=>{
    const id = req.params.id
    let review = await Review.findByPk(id)

    await review.destroy()

    res.redirect('/reviews')
}))

module.exports = router
