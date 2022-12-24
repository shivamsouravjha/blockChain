const mongoose =  require('mongoose');
const mongooseUniqueValidator =  require('mongoose-unique-validator');

const schema =  mongoose.Schema;

const TranscationSchema = new schema({
    address: {type :String, unique:true },
    transaction: [{
        blockNumber: {type :String,},
            timeStamp: {type :String,},
            hash: {type :String,},
            nonce: {type :String,},
            blockHash: {type :String,},
            transactionIndex: {type :String,},
            from: {type :String,},
            to: {type :String,},
            value: {type :String,},
            gas: {type :String,},
            gasPrice: {type :String,},
            isError: {type :String,},
            txreceipt_status: {type :String,},
            input: {type :String,},
            contractAddress: {type :String,},
            cumulativeGasUsed: {type :String,},
            gasUsed: {type :String,},
            confirmations: {type :String,},
            methodId: {type :String,},
            functionName: {type :String,}
    }]
},{
    versionKey: false 
  });

TranscationSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Report',TranscationSchema);