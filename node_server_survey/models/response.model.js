const sql = require("./db.js");

const Response = function(response) {
  this.filialeId = response.filialeId;
  this.nomeFiliale = response.nomeFiliale;
  this.ombrello = response.ombrello;
  this.giubbotto = response.giubbotto;
  this.vino_zanutta = response.vino_zanutta;
  this.vino_magnum = response.vino_magnum
  this.branzino = response.branzino;
  this.altro = response.altro;
  if(response.filialeId === undefined || response.filialeId ==='')
  {this.filialeId = 0}
  if(response.ombrello === undefined || response.ombrello ==='')
  {this.ombrello = 0}
  if(response.giubbotto === undefined || response.giubbotto ==='')
  {this.giubbotto = 0}
  if(response.vino_zanutta === undefined || response.vino_zanutta ==='')
  {this.vino_zanutta = 0}
  if(response.vino_magnum === undefined || response.vino_magnum ==='')
  {this.vino_magnum = 0}
  if(response.branzino === undefined || response.branzino ==='')
  {this.branzino = 0}
};

Response.create = (newResponse, result) => {
  console.log(newResponse);
  sql.query("INSERT INTO responses SET ?", newResponse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created log: ", { id: res.insertId, ...newResponse });
    result(null, { id: res.insertId, ...newResponse });
  });
};

module.exports = Response;
