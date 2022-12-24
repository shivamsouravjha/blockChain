const Service = require("./index");
const Database = require("../databaseConnect/transactionDB");
const axios = require("axios");

module.exports = class DataService extends Service {
  constructor(response) {
    super(response);
    this.database = new Database();
  }

  async fetchDataService({ page, offset, apiKey, address }) {
    try {
      const response = await axios(
        this.getPlatformApiRequestParams({ page, offset, apiKey, address })
      );
      await this.database.uploadTransaction(response.data.result, address); //made synchronous so that response can be sent and data b uploaded in background
      return response.data.result;
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  }
};
