const User = require("../models/user");
const Donat = require("../models/donat");

module.exports.user = async (req, res) => {
  console.log("user", req.body);

  // На базе модели User - создаем новую запись
  const user = new User({
    name: req.body.name,
    comment: req.body.comment,
  });

  try {
    // Сохраняем запись в БД и возвращаем статус 201
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    // Обработатываем ошибку
    console.log(e);
  }
};

module.exports.donat = async (req, res) => {
  console.log("donat", req.body);

  // На базе модели Donat - создаем новую запись
  const donat = new Donat({
    name: req.body.name,
    donat: req.body.donat,
  });

  try {
    // Сохраняем запись в БД и возвращаем статус 201
    await donat.save();
    res.status(201).json(donat);
  } catch (e) {
    // Обработатываем ошибку
    console.log(e);
  }
};
