const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const routes = require("./routes");
const dbConnect = require("./dbConfig/DatabaseConnect");
dbConnect();

app.use("/", routes);
app.use("/", (req, res) => {
  res.send({ error: "no api routes found" });
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
