const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static("./static/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => console.log(`server work at ${port} port`));
