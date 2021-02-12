const sql = require("./db.js");

// constructor
const Filiale = function(filiale) {
  this.nomeFiliale = filiale.nomeFiliale;
};

Filiale.create = (newFiliale, result) => {
  sql.query("INSERT INTO filiale SET ?", newFiliale, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created filiale: ", { id: res.insertId, ...newFiliale });
    result(null, { id: res.insertId, ...newFiliale });
  });
};

Filiale.getAll = result => {
  sql.query("SELECT * FROM filiale", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("filiale: ", res);
    result(null, res);
  });
};

Filiale.remove = (id, result) => {
  sql.query("DELETE FROM filiale WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Filiale with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted filiale with id: ", id);
    result(null, res);
  });
};

module.exports = Filiale;

