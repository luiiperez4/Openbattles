var mongoose = require('mongoose');

var codbo3Schema = mongoose.Schema({
  consoleType: {
                  name: String,
                  value: String,
               },
  consoleID: String,
  gameMode: String,
  numberOfPlayers: Number,
  rules: String,
  created: Date
});

codbo3Schema.index({"created": 1}, {"expireAfterSeconds":900});

module.exports = mongoose.model('CodBO3', codbo3Schema);
