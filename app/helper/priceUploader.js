const crossPlatformCall = new (require("../service/index"))();
const { default: axios } = require("axios");
const constants = require("../constant/constant");
const Database = new (require("../databaseConnect/transactionDB"))();

class PriceUploadHelper {
  async getPlatformApiRequestParams() {
    const params = {
      ids: constants.fetchEthPrice.IDS,
      vs_currencies: constants.fetchEthPrice.Currency,
    };
    let ethPrice = crossPlatformCall.crossPlatformCall(
      constants.HTTP.GET,
      constants.fetchEthPrice.URL,
      params
    );
    ethPrice = await axios(ethPrice);
    await Database.saveCurrency(
      constants.fetchEthPrice.Name,
      constants.fetchEthPrice.IDS,
      constants.fetchEthPrice.Currency,
      ethPrice.data.ethereum.inr
    );
  }
}
module.exports = PriceUploadHelper;
