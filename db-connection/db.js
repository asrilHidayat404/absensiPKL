// Konfigurasi koneksi ke database
const mysql = require("mysql")
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'absensiPKL'
});

module.exports = connection