const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
// var corsOptions = {
//   origin: "http://localhost:4200/api"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3220;
require("./routes/filiale.routes")(app);
require("./routes/response.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

