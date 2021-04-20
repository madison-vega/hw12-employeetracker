-- insert values into tables

INSERT INTO department (department_names) 
VALUES ('HR');
INSERT INTO department (department_names) 
VALUES ('Finance')


INSERT INTO roles (title, salary, department_id) 
VALUES ('Boss', 400,000.00, 1);
INSERT INTO roles (title, salary, department_id) 
VALUES ('Assisstant Boss', 200,000.00, 1);
INSERT INTO roles (title, salary, department_id) 
VALUES ('Head Accountant', 350,000.00, 2);
INSERT INTO roles (title, salary, department_id) 
VALUES ('Assisstant Accountant', 150,000.00, 2)

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Madison', 'Vega', 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gustavo', 'Gonzalez', 3, 4);


