import mysql from "mysql2";

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodebasic",
});

module.exports = pool;
