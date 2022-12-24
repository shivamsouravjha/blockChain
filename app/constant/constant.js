const HTTP = {
    GET: 'GET',
}

const Eth = {
    URL: 'https://api.etherscan.io/api',
    Module: 'account',
    Action: 'txlist',
    Startblock: 0,
    Endblock: 99999999,
}

module.exports = {
    HTTP, Eth
}