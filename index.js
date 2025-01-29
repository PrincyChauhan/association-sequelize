const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/");
require("./config/db");
const app = express();

const associationRoute = require("./routes/associationRoute");

app.use(express.json());
app.use(bodyParser.json());

app.use("/association", associationRoute);
(async () => {
  await db.syncDatabase();
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
