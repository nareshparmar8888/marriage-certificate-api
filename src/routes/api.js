// middlewares
const validation = require("../middlewares/validate.js");

// controllers
const AuthController = require("../controllers/authController.js");

// validation rules
const authRules = require("../validations/authValidation.js");
const marriageDetailsRules = require("../validations/marriageDetailsValidation.js");
const MarriageDetailController = require("../controllers/marriageDetailController.js");

function initRoutes(app) {
  app.get("/", async function (req, res) {
    res.send("Welcome to demo node project...");
  });

  // CRUD of Marriage Detail
  // update validation rules
  app.get(
    "/marriage-detail",
    [validation(marriageDetailsRules().addMarriageDetail).validate],
    MarriageDetailController().addMarriageDetails
  );

  // Crud movies
  // app.get('/movie', moviesController().getMovie);
  // app.post('/movie', [ validation(moviesRules().addMovie).validate ], moviesController().addMovie);
  // app.put('/movie', [ validation(moviesRules().updateMovie).validate ], moviesController().updateMovie);
  // app.delete('/movie', [ validation(moviesRules().deleteMovie).validate ], moviesController().deleteMovie);

  // route group
  app.post(
    "/adminLogin",
    [validation(authRules().adminLogin).validate],
    AuthController().adminLogin
  );
}

module.exports = initRoutes;
