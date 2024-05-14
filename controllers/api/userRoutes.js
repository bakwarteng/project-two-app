const router = require('express').Router();
const { User, Animals } = require('../../models');

//register a new user
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        // Find the user who matches the posted e-mail address
        const userData = await User.create(req.body);

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

//login an existing user
router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


//logout an existing user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;