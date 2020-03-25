const mongoose = require("mongoose");

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

const budgets = mongoose.model("budget", budgetSchema);

module.exports = budgets;