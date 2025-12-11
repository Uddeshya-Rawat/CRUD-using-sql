const dotenv= require('dotenv')

dotenv.config()

module.exports={
    PORT:process.env.PORT,
    DB_HOST:process.env.DB_HOST,
    DB_NAME:process.env.DB_NAME,
    PASSWORD:process.env.PASSWORD
}