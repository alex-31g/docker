const User = require("../models/user");

module.exports.getUsers = async (req, res) => {
  try {
    let users;
    await User.find({}, (err, data) => {
      users = data;
    });
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};
