const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    format.printf(
      (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
    )
  ),

  transports: [
    new transports.Console({ level: "warn" }),
    new transports.File({ filename: "index.log", level: "info" }),
  ],
});

module.exports = logger;
