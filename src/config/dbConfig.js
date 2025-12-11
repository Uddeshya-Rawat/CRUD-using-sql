const mysql=require('mysql2')
const config=require('./dotenvConfig')


const pool = mysql.createPool({
    host: config.DB_HOST,
    user: 'root',
    password: config.PASSWORD,
    database: config.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection((err, connection) => {
    if (err) {
        console.log("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Database connected successfully!");
        connection.release();
    }
});

module.exports = pool.promise();