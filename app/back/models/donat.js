const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  donat: {
    type: String,
  },
});

// "donats" - имя таблицы в базе
module.exports = mongoose.model("donats", donatSchema);
