const { Animals }= require('../models');
const animalData = [
  {
   
    species: "cat",
    age: "9",
    animal_name: "Boo Radley",
    breed: "American Shorthair",
    description: "Very sweet and protective tuxedo cat",
  },

  {
  
    species: "cat",
    age: "8",
    animal_name: "Chauncey",
    breed: "Ragdoll",
    description: " Sweet, somewhat shy, docile  grey point Ragdoll cat",
  },

  {
    
    species: "dog",
    age: "4",
    animal_name: "Jessie",
    breed: "Heeler",
    description: "Protective and loving red coat.",
  },
  {
   
    species: "dog",
    age: "9",
    animal_name: "Astrid",
    breed: "BullDog",
    description: "Loving and gentle dog, that snores but loves to cuddle.",
  },
  {
  
    species: "dog",
    age: "5",
    animal_name: "Rex",
    breed: " Giant Snouzer",
    description: "Chaotic, adorable, and loves attention.",
  },
  {

    species: "cat",
    age: "1",
    breed: "American Shorthair",
    animal_name: "Livvy",
    description: "Well-manered tabby who loves to play.",
  },

  {
    
    species: "dog",
    age: "7",
    breed: "Pomski",
    animal_name: "Chloe Bear",
    description: "Laid back sweetheart",
  },
];
const seedAnimals = ()=> Animals.bulkCreate(animalData);
module.exports = seedAnimals;