const { Animals } = require("../models");
const animalData = [
  {
    species: "cat",
    age: "9",
    animal_name: "Boo Radley",
    breed: "American Shorthair",
    description: "Meet Boo Radley, a remarkably sweet cat with a heart of gold. Sporting a sleek tuxedo coat, he's not just a charming companion but also a protective presence, especially around children. With Boo Radley, any home is bound to brim with joy and warmth.",
    gender: "Male",
    filename: "Boo-Radley.jpg",
  },

  {
    species: "cat",
    age: "8",
    animal_name: "Chauncey",
    breed: "Ragdoll",
    description: "Introducing Chauncy, the epitome of sweetness! This gentle soul is a bit reserved, preferring the serene atmosphere of a child-free home. With his soft grey fur and tranquil demeanor, Chauncy is the perfect match for households seeking a peaceful coexistence with their furry friends.",
    gender: "Male",
    filename: "chauncey.jpg",
  },

  {
    species: "dog",
    age: "4",
    animal_name: "Jessie",
    breed: "Heeler",
    description: "Say hello to Jessie, a vibrant and exceptionally bright girl with a heart full of love for children. Donning a striking red coat, she's both a loyal guardian and a playful spirit. Despite her penchant for shedding, Jessie's loyalty knows no bounds, as she dutifully protects her family and delights in showcasing her repertoire of tricks, from sitting pretty to playing hide and seek.",
    gender: "Female",
    filename: "Jessie-heller.jpg",
  },
  {
    species: "dog",
    age: "9",
    animal_name: "Astrid",
    breed: "BullDog",
    description: "Meet Astrid, the epitome of gentleness and affection. With her endearing snoring habits and daily need for exercise, she's the perfect blend of cuddly and active. Although she may overheat easily, Astrid's unwavering devotion and knack for snuggling make her the ultimate lapdog and cuddle partner for those seeking a loyal companion.",
    gender: "Female",
    filename: "astrid.jpg",
  },
  {
    species: "dog",
    age: "5",
    animal_name: "Rex",
    breed: " Giant Snouzer",
    description: "Standing tall at 38 inches and weighing a sturdy 120 pounds, Rex is as impressive as he is adorable. With his keen intelligence and affectionate nature, he thrives on attention and companionship. While he gets along well with other dogs, Rex's sensitive soul craves validation from everyone he meets, making him a lovable yet tender-hearted giant.",
    gender: "Male",
    filename: "rex.jpg",
  },
  {
    species: "cat",
    age: "1",
    breed: "American Shorthair",
    animal_name: "Livvy",
    description: "Enter Livvy, the epitome of grace and politeness in tabby form. With her penchant for routine and gentle reminders for feeding times, she's the epitome of a well-mannered feline companion. Despite her sharp claws, Livvy's playful antics are always gentle, whether she's basking in the sun, indulging in extra snacks, or engaging in playful romps with her furry companions.",
    gender: "Female",
    filename: "livvy.jpg",
  },

  {
    species: "dog",
    age: "7",
    breed: "Pomski",
    animal_name: "Chloe Bear",
    description: "Prepare to fall head over heels for Chloe Bear, a darling of unmatched sweetness and laid-back charm. With a talent for fetching and an uncanny ability to charm every human and pet she encounters, Chloe is destined to become the heart and soul of any household lucky enough to adopt her. With her quick wit and unwavering affection, Chloe is sure to capture hearts and find her forever home in the blink of an eye.",
    gender: "Female",
    filename: "Chloe.png",
  },
];
const seedAnimals = () => Animals.bulkCreate(animalData);
module.exports = seedAnimals;
