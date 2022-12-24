const express = require('express')
// const SourceController = require('../app/Controllers/report.js');

const TransactionAPIRoutes = express.Router();

// TransactionAPIRoutes.get('/outstanding', (request, response) => {
//   const reportController = new SourceController(response);
//   reportController.printOutstanding(request);
// });

module.exports =  TransactionAPIRoutes;