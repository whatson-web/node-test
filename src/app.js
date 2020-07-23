const express = require("express");
const db = require("./db");

// routes
const Songs = require("./songs");
const Artists = require("./artists");

const app = express();
const port = 3000;

app.listen(port, () => {
  app.use(express.json());

  console.log(`App listening at http://localhost:${port}`);

  // Routes
  Songs(app, db);
  Artists(app, db);
});
