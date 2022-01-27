const logger = require("./logger");

const array = [45, 6, 81, 4, 9, 25, 7, 44, 75];

const ifExistInArray = (number) => {
console.log("number:",number)
  if (number !== undefined) {
    for (let i = 0; i < array.length; i++) {
      if (number === array[i]) {
        logger.info("number exist in the array");
        return;
      }
    }
    logger.info("number is not exist in the array");
  } else {
    logger.error("undefined was inserted");
  }
};

module.exports = {ifExistInArray};
