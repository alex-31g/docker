const app = require("./app");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

async function start() {
  try {
    await mongoose.connect(
      // "mongodb+srv://alex:1111@cluster0.qywtl.mongodb.net/db-1-2021",
      // {
      //   useNewUrlParser: true,
      //   useFindAndModify: false,
      //   useUnifiedTopology: true,
      // }

      "mongodb://localhost:27017/docker_app"
    );
    app.listen(port, () => console.log(`server work at ${port} port`));
  } catch (e) {
    console.log(e);
  }
}

start();
