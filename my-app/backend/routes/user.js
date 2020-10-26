const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Using Postman, or any HTTP request service
//ADD a new User by sending { "username": "replacethis", "password" : "replacethis"}
router.route('/add').post((req, res) => {
    const user = new User( {
        username: req.body.username,
        password: req.body.password
    });

    user.save()
    .then(data => {
        res.json(data);
        console.log("User Created: " + req.body.username)
    })
    .catch(err => {
        console.log("User unable to be created")
        res.json({message: err})
    })
});

module.exports = router;