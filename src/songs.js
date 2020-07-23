module.exports = function(app, db) {
  
  app.get("/songs", async function (req, res) {
    
    db.find({}, function (err, docs) {
      res.send(docs);
    });
  });
  
  app.get("/songs/:id", async function (req, res) {
    
    const { params } = req;

    db.findOne({ _id: params.id }, function (err, doc) {
      res.send(doc);
    });
  });
  
  app.post("/songs", async function (req, res) {
    const { body } = req;

    db.insert(body, (err, newDoc) => {
      res.send(newDoc);
    });
  });
}