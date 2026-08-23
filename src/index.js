const express = require("express");
const { PORT, SYNC_DB } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");
const { Airport, City } = require("./models/index.js");
const sequelize = require("sequelize");
const db = require("./models");
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at : ${PORT}`);
    if (process.env.SYNC_DB === "true") {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
