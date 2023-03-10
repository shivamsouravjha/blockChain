const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./routes/index");
const cron = require("node-cron");
require("dotenv").config();
const app = express();
var cors = require("cors");
const PriceUploadHelper = new (require("./app/helper/priceUploader"))();
app.use(express.json());

// removing the CORS error
app.use(cors());
app.use("/api/user", Routes.UserAPIRoutes); ///for user commands
app.use("/api/transacton", Routes.TransactionAPIRoutes); ///for group commands

cron.schedule("* */10 * * * *", PriceUploadHelper.getPlatformApiRequestParams);

app.use((req, res, next) => {
  const error = new Error("Could not find this route.", 404); ///Incase of not having a route
  throw error;
});

app.use((error, req, res, next) => {
  //special 4 term function that lets know error to consider it as error
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || "An unknown error occurred!",
    success: error.success || false,
  });
});

mongoose
  .connect(
    `mongodb://${process.env.name}:${process.env.password}@cluster0-shard-00-00.dm1xw.mongodb.net:27017,cluster0-shard-00-01.dm1xw.mongodb.net:27017,cluster0-shard-00-02.dm1xw.mongodb.net:27017/${process.env.db}?ssl=true&replicaSet=atlas-x6eag6-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("listening at port", process.env.PORT || 5002);
    app.listen(process.env.PORT || 5002);
  })
  .catch((err) => {
    console.log(err);
  });
