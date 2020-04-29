const mongoose = require("mongoose");

//Creating mongo database named budgetSchema
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Set Database name
const budgets = mongoose.model("budget", budgetSchema);

module.exports = budgets;