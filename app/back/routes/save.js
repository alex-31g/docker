const express = require("express");

// Подключаем контроллеры для роутов
const controller = require("../controllers/save");

// Метод Router() - предназначен для создания роутов
const router = express.Router();

// При переходе на роут 'http://localhost:5000/api/save/user',
// будет вызван контроллер controller.user
router.post("/user", controller.user);

// При переходе на роут  'http://localhost:5000/api/save/donat'
// будет вызван контроллер controller.donat
router.post("/donat", controller.donat);

module.exports = router;
