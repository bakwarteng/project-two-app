//login functionality
//CRUD for user
//CRUD for an animal
//logout functionality
const router = require('express').Router();
const { User, Animals } = require('../models');
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

//get for login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;