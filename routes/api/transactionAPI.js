const express = require("express");
const TransactionController = require("../../app/controller/transactionController");

const TransactionAPIRoutes = express.Router();

TransactionAPIRoutes.get("/details", (request, response) => {
  const transactionController = new TransactionController(response);
  transactionController.fetchUserController(request);
});

module.exports = TransactionAPIRoutes;
