const Filiale = require("../models/filiale.model.js");

// Create and Save a new Filiale
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Filiale
  const filiale = new Filiale({
    nomeFiliale: req.body.nomeFiliale,
  });

  // Save Filiale in the database
  Filiale.create(filiale, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Filiale."
      });
    else res.send(data);
  });
};

// Retrieve all Filiali from the database.
exports.findAll = (req, res) => {
  Filiale.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving filiali."
      });
    else res.send(data);
  });
};

// Delete a Filiale with the specified id in the request
exports.delete = (req, res) => {
  Filiale.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Filiale with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Filiale with id " + req.params.id
        });
      }
    } else res.send({ message: `Filiale was deleted successfully!` });
  });
};


