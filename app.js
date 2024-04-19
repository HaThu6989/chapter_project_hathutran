const express = require("express");
const path = require("path");
const routes = require("./routes");

require("./database");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(5000, () => {
  console.log(`Server listening on port http://localhost:5000`);
});
