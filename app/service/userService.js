const ServiceContoller = require('./index');
const axios =  require('axios');

module.exports = class DataService extends ServiceContoller {
    async fetchDataService({page, offset, apiKey}) {
        try {
            const response= await axios(this.getPlatformApiRequestParams({page, offset, apiKey}));
            return response.data.result;
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }
    
}