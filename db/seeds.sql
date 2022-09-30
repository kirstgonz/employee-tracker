-- INFORMATION FOR AUTOFILLING TABLES

INSERT INTO department
    (id, dept_name)
VALUES
    (1, 'writer'),
    (2, 'editor'),
    (3, 'illustrator');

INSERT INTO roles
    (id, title, salary, dept_id)
VALUES
    (001, 'Executive Writer', 100000, 1),
    (002, 'Junior Writer', 90000, 1),
    (003, 'Executive Editor', 80000, 2),
    (004, 'Junior Editor', 70000, 2),
    (005, 'Executive Illustrator', 60000, 3),
    (006, 'Junior Illustrator', 50000, 3);

INSERT INTO employee
    (employee_id, first_name, last_name, role_id, manager_id)
VALUES
    (12, 'Eve', 'Dun', '001', '987'),
    (13, 'Mae', 'Juarez', '002', '654'),
    (14, 'John', 'Reese', '003', '321'),
    (15, 'Greg', 'Casas', '004', '876'),
    (16, 'Betty', 'Holmes', '005', '543'),
    (17, 'Rina', 'Wick', '006', '543');