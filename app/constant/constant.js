const HTTP = {
  GET: "GET",
};

const Eth = {
  URL: "https://api.etherscan.io/api",
  Module: "account",
  Action: "txlist",
  Startblock: 0,
  Endblock: 99999999,
  Sort: "asc",
  Address: "0xce94e5621a5f7068253c42558c147480f38b5e0d",
};

module.exports = {
  HTTP,
  Eth,
};
