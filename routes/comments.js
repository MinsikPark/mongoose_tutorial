const express = require('express');
const Comment = require('./schemas/comment');

const router = express.Router();

router.get('/:id', async function (req, res, next){
    try {
        const comments = await Comment.find({ commenter : req.params.id}).populate('commenter');
        res.json(comment);
    } catch (err){
        console.error( err);
        next(err);
    }
})

router.post('/', async function (req, res, next){
    try {
        const comment = new Comment({
            commenter : req.body.id,
            comment : req.body.comment
        })
        const result = await Comment.save( comment);
        res.json(result);
    } catch (err){
        console.error( err);
        next(err);
    }  
})

router.patch('/', async function (req, res, next){
    try {

    } catch (err){
        console.error( err);
        next(err);
    }
})

router.delete('/', async function (req, res, next){
    try {

    } catch (err){
        console.error( err);
        next(err);
    }
})