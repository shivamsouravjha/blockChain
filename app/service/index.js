
const constants  = require('../constant/constant');

class ServiceContoller {
    getPlatformApiRequestParams = ({page,offset,apikey,address}) => {
        const params = {
            module: constants.Eth.Module,
            action: constants.Eth.Action,
            address: address,
            startblock: constants.Eth.Startblock,
            endblock: constants.Eth.Endblock,
            apikey: apikey,
            page: page,
            offset:offset,
            sort: constants.Eth.Sort,
        }
        return {
          method: constants.HTTP.GET,
          url:constants.Eth.URL,
          params: params,
        };
      };
  }

module.exports = ServiceContoller;