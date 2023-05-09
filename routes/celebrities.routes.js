const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// estoy creando una ruta /celebrities/create
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/create", (req, res, next) => {
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then(() => {
        res.redirect("/")
    })
    .catch((err) => {
        next(err)
    })

})

module.exports = router;
