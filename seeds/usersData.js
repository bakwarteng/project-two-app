const { User } = require('../models');

const userData = [
    {
        username: 'nellvs',
        email: 'nell@gmail.com',
        password: 'password1234',
    },
    {
        username: 'maxb',
        email: 'max@gmail.com',
        password: 'password1234',
    },
    {
        username: 'lindseym',
        email: 'lindsey@gmail.com',
        password: 'password1234',
    },
    {
        username: 'bethannk',
        email: 'bethann@gmail.com',
        password: 'password1234',
    },
];

const seedUsers = async () => {
    await User.bulkCreate(userData, {
        individualHooks: true
    })
};

module.exports = seedUsers;