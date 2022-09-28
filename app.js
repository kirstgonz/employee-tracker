const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        },
        {
            type: 'input',
            name: 'addDept',
            message: 'What is the department name? (Required)',
            when: ({ choices }) => {
                if (choices === 'add a department'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log("Please enter a valid department!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addRoleName',
            message: 'What is the role? (Required)',
            when: ({ choices }) => {
                if (choices === 'add a role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: roleNameInput => {
                if (roleNameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid role!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addRoleSalary',
            message: 'What is the salary for this role? (Required)',
            when: ({ choices }) => {
                if (choices === 'add a role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: roleSalaryInput => {
                if (roleSalaryInput) {
                    return true;
                } else {
                    console.log("Please enter a valid salary!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addRoleDept',
            message: 'What is the department for this role? (Required)',
            when: ({ choices }) => {
                if (choices === 'add a role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: roleDeptInput => {
                if (roleDeptInput) {
                    return true;
                } else {
                    console.log("Please enter a valid department!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeFirstName',
            message: 'What is the first name of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'add an Employee'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid employee!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeLastName',
            message: 'What is the last name of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'add an Employee'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid last name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeRole',
            message: 'What is the role of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'add an Employee'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid role!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeManager',
            message: 'Who is the manager of this employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'add an Employee'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'updateEmployeeRole',
            message: 'What is the new role of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'update an employee role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid role!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'updateEmployeeSalary',
            message: 'What is the new salary of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'update an employee role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid salary!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'updateEmployeeDept',
            message: 'What is the new department of the employee? (Required)',
            when: ({ choices }) => {
                if (choices === 'update an employee role'){
                    return true;
                } else {
                    return false;
                }
        },
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log("Please enter a valid department!");
                    return false;
                }
            }
        }
    ])

}

promptUser();
