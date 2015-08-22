var mongoose = require('mongoose');

var bf4Schema = mongoose.Schema({
  consoleType: {
                  name: String,
                  value: String,
               },
  consoleID: String,
  gameMode: String,
  numberOfPlayers: Number,
  rules: String,
  hasServer: Boolean,
  serverName: String,
  created: Date
});

bf4Schema.index({"created": 1}, {"expireAfterSeconds":900});

module.exports = mongoose.model('BF4', bf4Schema);
