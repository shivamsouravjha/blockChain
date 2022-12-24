const { response } = require("express");
const TransactionModel = require("../models/userModel");
module.exports = class DataRepository {
  async uploadTransaction(responseData, address) {
    try {

      let resp = await this.fetchUserData(address);
      if(resp){
        resp =await TransactionModel.updateMany(
          { address: address, transaction: responseData },
        );
      } else {
        resp = await TransactionModel.insertMany(
          { address: address, transaction: responseData },
        );
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
};
