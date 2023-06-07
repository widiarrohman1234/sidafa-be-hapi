const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "testdatabase",
// });

const connection = mysql.createConnection({
  host: "database-1-mysql.ci3eixhfokad.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "J2q56E#f3Jj7",
  database: "sidafa-be-hapi",
});


connection.connect((err) => {
  if (err) {
    console.error("Koneksi Ke database gagal:", err);
    process.exit(1);
  }
  console.log("Terhubung ke database MySQL");
});

module.exports = connection;
