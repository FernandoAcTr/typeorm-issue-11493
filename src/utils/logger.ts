import winston from 'winston'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf((info) => `[${new Date().toISOString()}] ${info.level}: ${info.message}`)
      ),
    }),
  ],
  exitOnError: false,
})

export default logger
