const Service = require("./index");
const Database = require("../databaseConnect/transactionDB");
const axios = require("axios");
const constants = require("../constant/constant");

module.exports = class DataService extends Service {
  constructor(response) {
    super(response);
    this.database = new Database();
  }

  async fetchDataService({ page, offset, apiKey, address }) {
    try {
      const response = await axios(
        this.fetchEthTransactions({ page, offset, apiKey, address })
      );
      await this.database.uploadTransaction(response.data.result, address);
      return response.data.result;
    } catch (error) {
      throw new Error(error);
    }
  }
  fetchEthTransactions({ page, offset, apikey, address }) {
    const params = {
      module: constants.Eth.Module,
      action: constants.Eth.Action,
      address: address,
      startblock: constants.Eth.Startblock,
      endblock: constants.Eth.Endblock,
      apikey: apikey,
      page: page,
      offset: offset,
      sort: constants.Eth.Sort,
    };
    return this.crossPlatformCall(
      constants.HTTP.GET,
      constants.Eth.URL,
      params
    );
  }
};
