const ServiceContoller = require('./index');
const Database =  require('../databaseConnect/transactionDB')
const axios =  require('axios');

module.exports = class DataService extends ServiceContoller {
    constructor(response) {
        super(response);
        this.database = new Database();
    }

    async fetchDataService({page, offset, apiKey, address}) {
        try {
            const response= await axios(this.getPlatformApiRequestParams({page, offset, apiKey, address}));
            this.database.uploadTransaction( response.data.result,address);
            return response.data.result;
        } catch (error) {
            // console.log(error)
            throw new Error(error);
        }
    }
    
}