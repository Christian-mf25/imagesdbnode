const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://images:christian25011998@cluster0.9dmtptm.mongodb.net/test`,
  );

  // console.log("Conectado com sucesso!");
}

module.exports = main;
