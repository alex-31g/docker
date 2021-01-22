const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const saveRoutes = require("./routes/save");
const getUsersRoutes = require("./routes/get-users");

const app = express();

// Парсим json
app.use(bodyParser.json());

// Парсим данные формы
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Регистрируем save роуты:
// - первый параметр - базовый url
// - второй параметр - save роут
// Первый и второй параметр - конкатенируются
app.use("/api/save", saveRoutes);

app.use("/api/get-users", getUsersRoutes);

module.exports = app;
