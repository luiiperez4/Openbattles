var mongoose = require('mongoose');

var hardlineSchema = mongoose.Schema({
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

hardlineSchema.index({"created": 1}, {"expireAfterSeconds":900});


module.exports = mongoose.model('Hardline', hardlineSchema);
