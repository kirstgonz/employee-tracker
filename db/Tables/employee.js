const db = require('../connection');

// const employeeTable = () => {
//     const sql = `SELECT * FROM employee`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.table(rows);
//     promptUser();
//   });
// };

const addEmployee = () => {
const sql = `INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)`;
const params = [
  body.id,
  body.first_name,
  body.last_name,
  body.role_id,
  body.manager_id
];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result)
  });
};

const updateEmployee = () => {
const sql = `UPDATE employee SET role_id = ? 
               WHERE id = ?`;
  const params = [req.body.role_id, req.body.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else if (!result.affectedRows) {
      console.log('Employee not found!')
    } else {
      console.log(result)
    }
  });
};

module.exports = {
    employeeTable,
    addEmployee,
    updateEmployee
}