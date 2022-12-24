const Controller = require('./index');
const fs = require('fs');
const transactionService = require('../service/transactionService')
module.exports = class TransactionController extends Controller {
  constructor(response) {
    super(response);
    this.service = new transactionService();
  }
  async fetchUserController(request) {
    try {
        const {page, offset, apiKey, address } = request.query;
        const response= await this.service.fetchDataService({page, offset, apiKey, address});
        this.sendResponse(response);
    } catch (error) {
        this.handleException(error)
    }
  }
  
}