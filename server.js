const inquirer = require('inquirer');
const mysql = require('mysql');
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


const viewDepartment = () => {
    const query = 'SELECT department_names FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    searchDB();
}










const searchDB = () => {
    console.log('Welcome! Make a selection!')
    console.log('\n')
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
    }).then(res => {
        switch (res.add) {
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