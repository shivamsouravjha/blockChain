const Controller = require('./index');
const fs = require('fs');
const userService = require('../service/userService')
module.exports = class UserController extends Controller {
  constructor(response) {
    super(response);
    this.service = new userService();
  }
  async fetchUserController(request) {
    try {
        const {page, offset, apiKey } = request.query;
        const response= await this.service.fetchDataService({page, offset, apiKey});
        this.sendResponse(response);
    } catch (error) {
        console.log(error)
        this.handleException(error)
    }
  }
  
}