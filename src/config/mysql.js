const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdatabase",
});

connection.connect((err) => {
  if (err) {
    console.error("Koneksi Ke database gagal:", err);
    process.exit(1);
  }
  console.log("Terhubung ke database MySQL");
});

module.exports = connection;
