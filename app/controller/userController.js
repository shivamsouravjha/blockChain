const Controller = require("./index");
const fs = require("fs");
const BalanceService = require("../service/balanceService");
module.exports = class UserController extends Controller {
  constructor(response) {
    super(response);
    this.service = new BalanceService();
  }
  async calculateBalance(request) {
    try {
      const { address } = request.query;
      const response = await this.service.fetchDataService({
        address,
      });
      this.sendResponse(response);
    } catch (error) {
      this.handleException(error);
    }
  }
};
