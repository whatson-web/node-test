var Datastore = require("nedb");

const db = {};

const baseUrl = "src/data";

db.songs = new Datastore({ filename: `${baseUrl}/songs`, autoload: true });
db.artists = new Datastore({ filename: `${baseUrl}/artists`, autoload: true });

module.exports = db;
