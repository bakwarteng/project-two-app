const sequelize = require('sequelize');
const seedAnimals = require('./animalsData');
const seedUsers = require('./usersData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedAnimals();
    
    await seedUsers();

    process.exit(0);
};

seedAll();