const inquirer = require('inquirer');
const mysql = require('mysql');
const env = require('dotenv');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: process.env.DB_USER,

    password: process.env.DB_PW,

    database: process.env.DB_NAME,


});

connection.connect((err) => {

});


const viewDepartment = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        console.log('Showing Departments');
        if (err) throw err;
        cTable(res);
    });
    searchDB();
}
const viewEmployees = () => {
    const query = 'SELECT * FROM employees';
    connection.query(query, (err, res) => {
        console.log('Showing Employees');
        if (err) throw err;
        cTable(res);
    });
    searchDB();
}
const viewRoles = () => {
    const query = 'SELECT * FROM roles';
    connection.query(query, (err, res) => {
        console.log('Showing Roles');
        if (err) throw err;
        cTable(res);
    });
    searchDB();
}
const addDepartment = () => {

}
const addEmployee = () => {

}
const addRole = () => {

}
const updateRole = () => {

}
const exitProgram = () => {
    console.log('Goodbye!');
    process.exit();
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