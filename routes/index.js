const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const celebritiesRoutes = require('./celebrities.routes');
router.use('/celebrities', celebritiesRoutes);

const movieRoutes = require('./movies.routes');
router.use('/', movieRoutes);


module.exports = router;
