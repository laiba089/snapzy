const mysql = require('mysql2'); // use mysql2 for better SSL support

const db = mysql.createConnection({
  host: process.env.DB_HOST,           // e.g. snapzy.mysql.database.azure.com
  user: process.env.DB_USER,           // e.g. admin23@snapzy
  password: process.env.DB_PASSWORD,   // your Azure MySQL password
  database: process.env.DB_NAME,       // usually "db"
  ssl: {
    rejectUnauthorized: true           // required by Azure
  }
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to Azure MySQL database.');
});

module.exports = db;
