# Employee Tracker
The Employee Tracker was created to help users keep track of employees in a company.


## Description

The Employee Tracker aides users in creating a SQL database to keep track of employees in a company. When given a prompt from the command line, users can view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. Any of the changes will then be visible under the SQL database shown in the command line.

## Technologies Used

- JavaScript
- Node.js
- MySQL
- Inquirer
- console.table


## Usage and Website
[The Employee Tracker](https://kirstgonz.github.io/employee-tracker/) helps users keep better track of employees in a company. Using the npm package Inquirer, users are prompted to select any of the following: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

If you want to run this application from the command line, you must first install all the dependencies through the command line by typing in 'npm i'. Then, the user will type 'mysql -u root -p'. Within the mysql window, the user will then sign in with their mysql password, then type 'source db/db.sql', 'source db/schema.sql', 'source db/seeds.sql', and then 'Quit'. Lastly, the user must change the password found in 'connection.js' to their mysql password. Finally, the user can run 'node app' from the command line and the application will start.

A video walkthrough can be found [here](https://drive.google.com/file/d/136vcQsmyN8iLPuToktQTfc10E2sSBO3o/view?usp=sharing).

## Credits
Built by [Kirstyn Gonzalez](https://github.com/kirstgonz)

## License

[https://choosealicense.com/](https://choosealicense.com/).
