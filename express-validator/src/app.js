const express = require("express");
const userController = require("./controllers/user.controller");

const {
  checkSchema,
  checkExact,
  oneOf,
  buildCheckFunction,
  check,
  body,
  cookie,
  header,
  param,
  query,
  matchedData,
  validationResult,
  Result,
  ExpressValidator,
} = require("express-validator");

const app = express();

app.use(express.json());
app.use("/users", userController);

app.get(
  "/hello",
  query("person").notEmpty().escape(),
  query("city").notEmpty().escape(),
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const data = matchedData(req);
      // return res.send(`Hello, ${req.query.person} from ${req.query.city}!`);
      return res.send(`Hello, ${data.person} from ${data.city}!`);
    }
    res.status(200).send({ errors: result });
  }
);

module.exports = app;
