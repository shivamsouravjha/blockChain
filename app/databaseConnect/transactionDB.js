const { response } = require("express");
const TransactionModel = require("../models/userModel");
const EthPriceModel = require("../models/ethPriceModel");
module.exports = class DataRepository {
  async uploadTransaction(responseData, address) {
    try {
      let resp = await this.fetchUserData(address);
      if (resp) {
        resp = await TransactionModel.updateMany({
          address: address,
          transaction: responseData,
        });
      } else {
        resp = await TransactionModel.insertMany({
          address: address,
          transaction: responseData,
        });
      }
      return resp;
    } catch (error) {
      throw error;
    }
  }
  async saveCurrency(name, blockchain, currency, amount) {
    try {
      let resp = await this.fetchCurrency(name);
      if (resp) {
        resp = await EthPriceModel.updateMany({
          name: name,
          blockchain: blockchain,
          currency: currency,
          amount: amount,
        });
      } else {
        resp = await EthPriceModel.insertMany({
          name: name,
          blockchain: blockchain,
          currency: currency,
          amount: amount,
        });
      }
      return resp;
    } catch (error) {
      throw error;
    }
  }
  async fetchUserData(address) {
    try {
      let resp = await TransactionModel.findOne({ address: address });
      return resp;
    } catch (error) {
      throw error;
    }
  }
  async fetchCurrency(name) {
    try {
      let resp = await EthPriceModel.findOne({ name: name });
      return resp;
    } catch (error) {
      throw error;
    }
  }
};
