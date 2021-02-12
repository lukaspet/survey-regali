module.exports = app => {
  const filiale = require("../controllers/filiale.controller.js");

  // Create a new Filiale
  app.post("/survey/api/filiale", filiale.create);

  // Retrieve all Filiali
  app.get("/survey/api/filiale", filiale.findAll);

  // Delete a Filiale with id
  app.delete("/su7rvey/api/filiale/:id", filiale.delete);

};
