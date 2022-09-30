const db = require('../connection');

const rolesTable = () => {
    const sql = `SELECT * FROM roles`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    promptUser();
    });
  };

const addRoles = () => {
const sql = `INSERT INTO employee (id, title, salary, dept_id) VALUES (?,?,?,?)`;
const params = [
  body.id,
  body.title,
  body.salary,
  body.dept_id,
];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
};

module.exports = {
    rolesTable,
    addRoles
}