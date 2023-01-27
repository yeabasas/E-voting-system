require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const authRoute = require("./routes/auth.routes");

app.use(cors({ origin: "*" }));
app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log(` http://localhost:${5000}`);
});
