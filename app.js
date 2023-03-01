const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/pictures", pictureRouter);
app.use("/files", express.static("uploads"));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
