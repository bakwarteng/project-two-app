const router = require('express').Router();
const { User, Animals } = require('../models');

//get all animals for homepage
router.get('/', async (req, res) => {
    try {
        const dbAnimalData = await Animals.findAll();
        const animals = dbAnimalData.map((animal) =>
            animal.get({ plain: true })
        );
        res.render('homepage', {
            animals
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occured', err });
    }
});

//get for one animal
router.get('/animals/:id',  async (req, res) => {
    try {
        const dbAnimalData = await Animals.findByPk(req.params.id);
        const animal = dbAnimalData.get({ plain: true });
        res.render('animal', { animal, loggedIn: req.session.loggedIn });

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
