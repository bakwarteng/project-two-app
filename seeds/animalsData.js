const { Animals } = require("../models");
const animalData = [
  {
    species: "cat",
    age: "9",
    animal_name: "Boo Radley",
    breed: "American Shorthair",
    gender: "Male",
    description: "Very sweet and protective tuxedo cat",
    filename: "Boo-Radley.jpg",
  },

  {
    species: "cat",
    age: "8",
    animal_name: "Chauncey",
    breed: "Ragdoll",
    gender: "Male",
    description: " Sweet, somewhat shy, docile  grey point Ragdoll cat",
    filename: "chauncey.jpg",
  },

  {
    species: "dog",
    age: "4",
    animal_name: "Jessie",
    breed: "Heeler",
    description: "Protective and loving red coat.",
    gender: "Female",
    filename: "Jessie-heller.jpg",
  },
  {
    species: "dog",
    age: "9",
    animal_name: "Astrid",
    breed: "BullDog",
    gender: "Female",
    description: "Loving and gentle dog, that snores but loves to cuddle.",
    filename: "astrid.jpg",
  },
  {
    species: "dog",
    age: "5",
    animal_name: "Rex",
    breed: " Giant Snouzer",
    gender: "Male",
    description: "Chaotic, adorable, and loves attention.",
    filename: "rex.jpg",
  },
  {
    species: "cat",
    age: "1",
    breed: "American Shorthair",
    animal_name: "Livvy",
    gender: "Female",
    description: "Well-manered tabby who loves to play.",
    filename: "livvy.jpg",
  },

  {
    species: "dog",
    age: "7",
    breed: "Pomski",
    animal_name: "Chloe Bear",
    gender: "Female",
    description: "Laid back sweetheart",
    filename: "Chloe.png",
  },
];
const seedAnimals = () => Animals.bulkCreate(animalData);
module.exports = seedAnimals;
