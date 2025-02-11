const express = require("express");
const router = express.Router();
const db = require("../models");
// GET /pokemon - return a page with favorited Pokemon
router.get("/", async (req, res) => {
  // TODO: Get all records from the DB and render to view
  const allFaves = await db.pokemon.findAll();
  // render faves page
  console.log(allFaves);
  res.render("faves.ejs", { allFaves });
  // res.send("faves.ejs"); //allFaves });
  // res.send("Render a page of favorites here");
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post("/", async (req, res) => {
  // TODO: Get form data and add a new record to DB
  await db.pokemon.create({
    name: req.body.name,
  });
  res.redirect("/pokemon");
});
// router.get("/pokemon", async (req, res) => {
//   console.log(allFaves);
// });

module.exports = router;
