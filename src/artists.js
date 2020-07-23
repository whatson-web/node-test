module.exports = (app, db) => {
  const artistDb = db.artists;

  app.get("/artists", async function (req, res) {
    artistDb.find({}, function (err, docs) {
      res.send(docs);
    });
  });

  app.get("/artists/:id", async function (req, res) {
    const { params } = req;

    artistDb.findOne({ _id: params.id }, function (err, doc) {
      res.send(doc);
    });
  });

  app.post("/artists", async function (req, res) {
    const { body } = req;

    artistDb.insert(body, (err, newDoc) => {
      res.send(newDoc);
    });
  });
};
