const Controller = require('./index');
const fs = require('fs');

module.exports = class TransactionController extends Controller {
  constructor(response) {
    super(response);
  }
}