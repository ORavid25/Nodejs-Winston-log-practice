const express = require("express");
const logger = require("./logger");
const PORT = process.env.PORT || 3000;
const app = express();
const { ifExistInArray } = require("./function_one");
const { sumOfTwoNumbers } = require("./function_two");


ifExistInArray(8);
sumOfTwoNumbers(5,5);
sumOfTwoNumbers();
sumOfTwoNumbers(2);


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
