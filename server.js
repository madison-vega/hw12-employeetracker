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
};
const addDepartment = () => {
    inquirer
        .prompt({
            name: 'addDept',
            type: 'input',
            message: 'Input new department name.',
        })
        .then((res) => {
            const query = `INSERT INTO department(department_names) VALUES ('${res.addDept}')`;
            connection.query(query, (err, res) => {
                console.log('Successfully added department.');
                if (err) throw err;
                cTable(res);
            })

        });
    searchDB();
};
const addEmployee = () => {
    inquirer
        .prompt(
            {
                name: 'addFirst',
                type: 'input',
                message: "Input new employee's first name.",
            },
            {
                name: 'addLast',
                type: 'input',
                message: "Input new employee's last name.",
            }
        )
        .then((res) => {
            const query = `INSERT INTO employee(first_name, last_name) VALUES ('${res.addFirst}, ${res.addLast}')`;
            connection.query(query, (err, res) => {
                console.log('Successfully added new employee.');
                if (err) throw err;
                cTable(res);
            })

        });
    searchDB();


}
const addRole = () => {
    inquirer
        .prompt(
            {
                name: 'addTitle',
                type: 'input',
                message: 'Input new role title.',
            },
            {
                name: 'addSalary',
                type: 'input',
                message: 'Input new salary amount as a decimal.',
            },

        )
        .then((res) => {
            const query = `INSERT INTO roles(title, salary) VALUES ('${res.addTitle},${res.addSalary}')`;
            connection.query(query, (err, res) => {
                console.log('Successfully added new role.');
                if (err) throw err;
                cTable(res);
            })

        });
    searchDB();

}
const updateRole = () => {
    inquirer
        .prompt(
            {
                name: 'employeeName',
                type: 'list',
                message: "Which employee's role would you like to update?",
                choices: []

            },
            {
                name: 'roleUpdate',
                type: 'list',
                message: "Which employee's role would you like to update?",
                choices: []

            },
        )
        .then((res) => {
            const query = `UPDATE role_id SET role_id=${res.roleUpdate} WHERE=${res.employeeName}`;
            connection.query(query, (err, res) => {
                console.log('Successfully updated role.');
                if (err) throw err;
                cTable(res);
            })
        })




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
connection.connect((err) => {
    if (err) throw err;
    searchDB();
});