//get requests
//where we create elements on the page

//get all animals for homepage

//get for one animal

//get for login route

const router = require("express").Router();
const { Router } = require("express");
const { Animals } = require("../models");

router.get("/", async (req, res) => {
  const allAnimalData = await Animals.findAll();
  res.json(allAnimalData);
});
module.exports = router;
