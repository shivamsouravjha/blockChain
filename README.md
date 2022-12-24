# BlockChain
So let's talk about what we do:
* Develop a Server Side Application to fetch Crypto Transactions of a user


## Task we do:

**1** 
* An API to fetch the crypto transactions of a user.
* Input : apiKey, address, page, offset.
* SampleCurl : localhost:5002/api/transacton/details?page=1&offset=1&apiKey=apiKey&address=address (Only Get)

**2** 
* Cron-Job to fetch the price of Ethereum every 10 minutes and store it in the database.

**3**
* An API to fetch address as an input and get their current balance and current price of ether as output.
* Input : address.
* SampleCurl : localhost:5002/api/user/balance?address=address (Only Get)

## Data Type
Currency Data: {"_id":{"$oid":"63a73e8926a01eadf781efdf"},"name":"inr-ethereum","blockchain":"ethereum","currency":"inr","amount":{"$numberInt":"100891"}}

Transaction Data: {"_id":{"$oid":"63a722d493ca83789d76f4d9"},"address":"0xce94e5621a5f7068253c42558c147480f38b5e0d","transaction":[{"blockNumber":"14609155","timeStamp":"1650284543","hash":"0x25f745fc71d9ddd0db561d06a023e6c654089861dc4625cdc81743afd3228982","nonce":"112207",
"blockHash":"0xa48498a87afc3714f3e6edce2fd3344ddbdb85e77eaf85bed3afa60f879616e1",
"transactionIndex":"220","from":"0xf598b81ef8c7b52a7f2a89253436e72ec6dc871f","to":"0xce94e5621a5f7068253c42558c147480f38b5e0d","value":"10003420000000000","gas":"105000","gasPrice":"29489937413","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"",
"cumulativeGasUsed":"14067378","gasUsed":"21000",
"confirmations":"1647156","methodId":"0x","functionName":"","_id":{"$oid":"63a7412a6389b9a5d4c53224"}}]}
