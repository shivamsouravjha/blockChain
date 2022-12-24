const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema;

const CurrencySchema = new schema(
  {
    name: { type: String, unique: true },

        blockchain: { type: String },
        currency: { type: String },
        amount: {type: Number},

  },
  {
    versionKey: false,
  }
);

CurrencySchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("CurrenySchema", CurrencySchema);
