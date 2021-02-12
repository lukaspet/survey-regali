module.exports = app => {
  const response = require("../controllers/response.controller.js");

  // Create a new Response
  app.post("/survey/api/response", response.create);

};
