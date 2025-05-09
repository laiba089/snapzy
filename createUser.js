const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'snapzy.mysql.database.azure.com',
  user: 'laiba234@snapzy',
  password: 'SnapzyTest123!',
  ssl: {
    rejectUnauthorized: true
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Connection error:', err.message);
    return;
  }

  console.log('Connected!');

  const createUserSQL = `
    CREATE USER 'snapzyadmin'@'%' IDENTIFIED BY 'SnapzyAdmin123!';
    GRANT ALL PRIVILEGES ON *.* TO 'snapzyadmin'@'%' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
  `;

  connection.query(createUserSQL, (err, results) => {
    if (err) {
      console.error('Query error:', err.message);
    } else {
      console.log('User created successfully!');
    }

    connection.end();
  });
});
