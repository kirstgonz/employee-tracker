const db = require('../connection');

const deptTable = () => {
    const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      return;
    }
    console.table(rows);
    promptUser();
  });
};


const addDept = () => {
const sql = `INSERT INTO department (id, dept_name) VALUES (?,?)`;
const params = [
  body.id,
  body.dept_name
];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log(result)
});
};

module.exports = {
    deptTable,
    addDept
}