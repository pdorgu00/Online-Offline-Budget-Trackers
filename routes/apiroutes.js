const router = require("express").Router();
const expenses = require("../models/budget.js");

//POST Route
router.post("/api/budget", ({ body }, res) => {
  expenses.create(body)
    .then(dbbudget => {
      res.json(dbbudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET Route
router.get("/api/budget", (req, res) => {
  expenses.find({})
    .sort({ date: -1 })
    .then(dbbudget => {
      res.json(dbbudget);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//POST Route
router.post("/api/budget/bulk", ({ body }, res) => {
    expenses.insertMany(body)
      .then(dbbudget => {
        res.json(dbbudget);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


module.exports = router;