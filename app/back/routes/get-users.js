const express = require("express");

// Подключаем контроллеры для роутов
const controller = require("../controllers/get-users");

// Метод Router() - предназначен для создания роутов
const router = express.Router();

// При переходе на роут 'http://localhost:5000/api/get-users',
// будет вызван контроллер controller.user
router.get("/", controller.getUsers);

module.exports = router;
