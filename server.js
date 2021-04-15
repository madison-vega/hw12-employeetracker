const inquirer = require('inquirer');
const mysql = require('mysql');
const conTable = require('console.table');
const env = require('dotenv');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: process.env.DB_PW,

    database: 'employee_data',


});

connection.connect((err) => {

});

const searchDB = () => {
    inquirer
    .prompt({
      name: 'intro',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View Departments',
        'View Employees',
        'View Roles',
        'Add Department',
        'Add Employee',
        'Add Role',
        'Update employee role',
        'Exit Program'
      ],
    }).then(data => {
        switch (data.add) {
            case 'View Departments':
                viewDepartment();
                break;
            case 'View Employees':
                viewEmployees();
                break;
            case 'View Roles':
                viewRoles();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Exit Program':
                exitProgram();
                break;


        }

    })
}