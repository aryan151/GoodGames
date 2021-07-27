const express = require('express');

const { asyncHandler , csrfProtection} = require('./utils');
const { Game, Review, User ,} = require('../db/models');


const router = express.Router();

router.get('/reviews', asyncHandler(async (req,res,next)=>{
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
    const {content} = req.body
    let review = Review.findByPk(id, {
        include:[
            {model: Game},
            {model: User}
        ]
    })
    res.render('review-edit', {title: 'Edit Review',review})
}))

router.post('/reviews/:id(\\d+)/edit', asyncHandler(async (req,res,next)=>{
    const id = req.params.id
    const {content} = req.body
    let review = await Review.findByPk(id)
    

}))

module.exports = router
