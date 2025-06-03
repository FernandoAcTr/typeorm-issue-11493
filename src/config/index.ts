import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('.env')) {
  dotenv.config()
}

export const config = Object.freeze({
  PORT: process.env.PORT || 3000,
  DB: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    URI: process.env.DB_URI,
    SSL: process.env.DB_SSL === 'true',
  },
})
