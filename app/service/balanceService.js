const Service = require("./index");
const Database = require("../databaseConnect/transactionDB");
const axios = require("axios");

module.exports = class BalanceService extends  Service {
  constructor(response) {
    super(response);
    this.database = new Database();
  }

  async fetchDataService({ address }) {
    try {
      const response = await this.database.fetchUserData(address);
      let value = 0;
      if (!response || !response.transaction){
        throw new Error('No transactions found')
      }
      for (let i = 0; i < response.transaction.length; i++) {
        if (response.transaction[i].from == address) {
          value -= parseInt(response.transaction[i].value, 10);
        } else if (response.transaction[i].to == address) {
          value += parseInt(response.transaction[i].value, 10);
        }
      }
      return value;
    } catch (error) {
      throw new Error(error);
    }
  }
};
