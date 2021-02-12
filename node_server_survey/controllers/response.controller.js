const Response = require("../models/response.model.js");

// Create and Save a new response
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Response
  const response = new Response({
    filialeId: req.body.filialeId,
    nomeFiliale: req.body.nomeFiliale,
    ombrello: req.body.ombrello,
    giubbotto: req.body.giubbotto,
    vino_zanutta: req.body.vino_zanutta,
    vino_magnum: req.body.vino_magnum,
    branzino: req.body.branzino,
    altro: req.body.altro,
  });

  // Save Response in the database
  Response.create(response, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Filiale."
      });
    else res.send(data);
  });
  // Save Response in the database
  // Response.create(response)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });
};

