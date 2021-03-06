const router = require('express').Router();
const Qna = require('../models/qna.model');
const express = require('express');

router.use(express.urlencoded({
    extended: true
  }))

router.route('/').get((req, res) => {
    Qna.find()
    .then(qnas => res.json(qnas))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Send request to //localhost:5000/qna/id example: localhost:5000/qna/5f968ffad7acee393ca7c42a
router.route('/:id').get((req, res) => {
    Qna.findById(req.params.id)
    .then(qna => res.json(qna))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const qna = new Qna( {
        question: req.body.question,
        answers: req.body.answers,
        correctanswers: req.body.correctanswers
    });

    qna.save()
    .then(data => {
        res.json(data);
        console.log("Question Created: " + req.body.question)
    })
    .catch(err => {
        console.log("Question unable to be created")
        res.json({message: err})
    })
});

module.exports = router;