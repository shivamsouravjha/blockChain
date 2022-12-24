const Controller = require('./index');
const fs = require('fs');
const axios =  require('axios');
const constants  = require('../constant/constant');
const getPlatformApiRequestParams = ({page,offset,sort}) => {
    const params = {
        module: constants.Eth.Module,
        action: constants.Eth.Action,
        address: process.env.Address,
        startblock: constants.Eth.Startblock,
        endblock: constants.Eth.Endblock,
        apikey: process.env.apikey,
        page: page,
        offset:offset,
        sort: sort
    }
    return {
      method: constants.HTTP.GET,
      url:constants.Eth.URL,
      params: params,
    };
  };

module.exports = class UserController extends Controller {
  constructor(response) {
    super(response);
  }
  async fetchUserController(request) {
    try {
        const {page, offset, sort} = request.query;
        const response= await axios(getPlatformApiRequestParams({page, offset, sort}));
        this.sendResponse(response.data.result);
    } catch (error) {
        console.log(error)
        this.handleException(error)
    }
  }
  
}