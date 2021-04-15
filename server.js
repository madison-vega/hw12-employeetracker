const inquirer = require('inquirer');
const mysql = require('mysql');
const conTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: process.env.DB_PW,

    database: 'employee_data',


});

connection.connect((err) => {

})
