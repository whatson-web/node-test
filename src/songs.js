module.exports = function (app, db) {
  const songDb = db.songs;

  app.get("/songs", async function (req, res) {
    songDb.find({}, function (err, docs) {
      res.send(docs);
    });
  });

  app.get("/songs/:id", async function (req, res) {
    const { params } = req;

    songDb.findOne({ _id: params.id }, function (err, doc) {
      res.send(doc);
    });
  });

  app.post("/songs", async function (req, res) {
    const { body } = req;

    songDb.insert(body, (err, newDoc) => {
      res.send(newDoc);
    });
  });
};
