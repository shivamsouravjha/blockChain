const express = require('express')
const TransactionController = require('../../app/controller/transactionController');

const TransactionAPIRoutes = express.Router();

TransactionAPIRoutes.get('/outstanding', (request, response) => {
  const transactionController = new TransactionController(response);
});

module.exports =  TransactionAPIRoutes;