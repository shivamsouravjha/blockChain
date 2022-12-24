const { response } = require('express');
const TransactionModel  = require('../models/userModel')
module.exports = class DataRepository {
  async uploadTransaction(responseData  ,address) {
    try{            
        let resp = await TransactionModel.updateOne({address:address,transaction: responseData},{upsert:true  }); 
        return resp
    } catch (error) {
        throw error
    }
}
}