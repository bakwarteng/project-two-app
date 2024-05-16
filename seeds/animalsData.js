const { Animals } = require("../models");
const animalData = [
  {
    species: "cat",
    age: "9",
    animal_name: "Boo Radley",
    breed: "American Shorthair",
    description: "Boo Radley is a very sweet cat. He is also a protective tuxedo cat that loves children. This loving baby will make any home happier.",
    filename: "Boo-Radley.jpg",
  },

  {
    species: "cat",
    age: "8",
    animal_name: "Chauncey",
    breed: "Ragdoll",
    description: " Chauncy is so Sweet! He is somewhat shy and is a docile grey point Ragdoll cat. He should be in a home that is calm and with no children for him to be happiest. He will make a great companion to other pets.",
    filename: "chauncey.jpg",
  },

  {
    species: "dog",
    age: "4",
    animal_name: "Jessie",
    breed: "Heeler",
    description: "Jessie is an active and incredibly intelligent girl who is protective, loving, and patient with children. She has a red coat and tends to shed often but is incredibly loyal to her family and has learned many tricks including sitting pretty, hide and go seek, and will check the property perimeter for threats.",
    filename: "Jessie-heller.jpg",
  },
  {
    species: "dog",
    age: "9",
    animal_name: "Astrid",
    breed: "BullDog",
    description: "Astrid is the most loving and gentle dog. She snores and needs exercise daily but is not an extremly overactive dog since she tends to overheat easily. If you want a lapdog and cuddle partner, she is the dog for you!.",
    filename: "astrid.jpg",
  },
  {
    species: "dog",
    age: "5",
    animal_name: "Rex",
    breed: " Giant Snouzer",
    description: "Rex weighs in at 120 pounds and sits about 38 inches tall standing. He is intelligent, adorable, and needs a lot of attention. He works well with other dogs but will get his feelings hurt if not favored by everyone.",
    filename: "rex.jpg",
  },
  {
    species: "cat",
    age: "1",
    breed: "American Shorthair",
    animal_name: "Livvy",
    description: "Livvy is a Well-manered tabby that loves to kepp a routine. She will politely be your alarm clock and reminder of feeding daily.  She does have her claws but does not use them when playing. Her hobbies include sun bathing, eating extra snacks, and playing with other pets.",
    filename: "livvy.jpg",
  },

  {
    species: "dog",
    age: "7",
    breed: "Pomski",
    animal_name: "Chloe Bear",
    description: "This preecious baby is a laid back sweetheart. She loves to fetch and has the humans around her extremly well trained. Chole loves every pet and human and will be the most amazing friend. She will be adopted quick.",
    filename: "Chloe.png",
  },
];
const seedAnimals = () => Animals.bulkCreate(animalData);
module.exports = seedAnimals;
