
//get requests

const router = require('express').Router();
const { User, Animals } = require('../models');

//get requests 

//where we create elements on the page
// get all users
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            include: [
                {
                    model: Animals,
                    attributes: ['species', 'age', 'animal_name', 'breed'],
                },
            ],
        });
        const users = dbUserData.map((user) =>
            user.get({ plain: true })
        );
        res.render('homepage', {
            user,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occured', err });
    }
});
// get one user
router.get('/users/:id', async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.params.id)
        const user = dbUserData.get({ plain: true });
        res.render('user', { user, loggedIn: req.session.loggedIn });

    } catch (err) {
        res.status(500).json({ message: 'An Error occured', err });
    }
});

//get all animals for homepage
router.get('/', async (req, res) => {
    try {
        const dbAnimalData = await Animal.findAll();
        const animal = dbAnimalData.map((animal) =>
            animal.get({ plain: true })
        );
        res.render('homepage', {
            animal
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occured', err });
    }
});
//get for one animal
router.get('/animals/:id', async (req, res) => {
    try {
        const dbAnimalData = await Animal.findByPk(req.params.id, {
            include: [
                {
                    model: Animal,
                    attributes: [
                        'species',
                        'age',
                        'animal_name',
                        'breed',
                        'description',
                    ],
                },
            ],
        });
        const animal = dbAnimalData.get({ plain: true });
        res.render('animal', { animals, loggedIn: req.session.loggedIn });

    } catch (err) {
        res.status(500).json({ message: 'An error occured', err });
    }
});
//get for login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;

const router = require("express").Router();
const { Router } = require("express");
const { Animals } = require("../models");

router.get("/", async (req, res) => {
  const allAnimalData = await Animals.findAll();
  res.json(allAnimalData);
});
module.exports = router;
