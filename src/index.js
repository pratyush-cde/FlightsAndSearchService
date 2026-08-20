const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at : ${PORT}`);
  });
};

setupAndStartServer();
