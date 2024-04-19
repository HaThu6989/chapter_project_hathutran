const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/chapter";
mongoose
  .connect(MONGODB_URL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

module.exports = mongoose;
