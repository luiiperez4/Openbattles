var mongoose = require('mongoose');

var siegeSchema = mongoose.Schema({
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

siegeSchema.index({"created": 1}, {"expireAfterSeconds":900});


module.exports = mongoose.model('Siege', siegeSchema);
