const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

// "users" - имя таблицы в базе
module.exports = mongoose.model("users", userSchema);
