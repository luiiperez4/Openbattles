var mongoose = require('mongoose');

var rocketSchema = mongoose.Schema({
  consoleType: {
                  name: String,
                  value: String,
               },
  region: String,
  consoleID: String,
  gameMode: String,
  numberOfPlayers: Number,
  rules: String,
  created: Date
});

rocketSchema.index({"created": 1}, {"expireAfterSeconds":900});

module.exports = mongoose.model('Rocket', rocketSchema);
