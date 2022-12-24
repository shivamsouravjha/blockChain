
class Service  {
  crossPlatformCall = ( method,url,params) => {
    return {
      method: method,
      url: url,
      params: params,
    };
  };
}

module.exports = Service;
