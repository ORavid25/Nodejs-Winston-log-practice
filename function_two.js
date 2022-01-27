const logger = require("./logger");

const sumOfTwoNumbers = (num1,num2) => {
    if(num1 !== undefined && num1 !== undefined){
        logger.info(`the sum of ${num1} + ${num2} is ${num1+num2}`)
        return num1 + num2;
    }
    logger.error(`one of the fields was undefined`)

}

module.exports = {sumOfTwoNumbers};