var mongoose = require('mongoose');

var codawSchema = mongoose.Schema({
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

codawSchema.index({"created": 1}, {"expireAfterSeconds":900});

module.exports = mongoose.model('CodAW', codawSchema);
