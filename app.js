const inquirer = require('inquirer');
const db = require('./db/connection.js');
const consoleTable = require('console.table');

const viewDepartments = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
        promptUser();
    })
}


const viewEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        console.table(rows);
        promptUser();
    })
}

const viewRoles = () => {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        console.table(rows);
        promptUser();
    })
}
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
        }
    ])
    .then(answers => {
        switch(answers.choices){
            case 'view all departments':
                console.log('\nShowing departments:');
                viewDepartments();
                break;
            case 'view all roles':
                console.log('\nShowing roles:');
                viewRoles();
                break;
            case 'view all employees':
                console.log('\nShowing employees');
                viewEmployees();
                break;
            case 'add a department':
                promptUser();
                break;
            case 'add a role':
                promptUser();
                break;
            case 'add an employee':
                promptUser();
                break;
            case 'update an employee role':
                promptUser();
                break;
            case 'quit':
                console.log('\n\nQuitting\n\n');
                return;
        }
    })
}

promptUser();