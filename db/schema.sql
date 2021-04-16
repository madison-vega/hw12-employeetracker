DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;


CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    department_names VARCHAR(30)
)
CREATE TABLE roles (
    id INT PRIMARY KEY
    title VARCHAR(30) 
    salary DECIMAL 
    department_id INT FOREIGN KEY (department_id)
)
CREATE TABLE employee (

    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    first_name VARCHAR(30) to hold employee first name
    last_name VARCHAR(30) to hold employee last name
    role_id INT FOREIGN KEY (role_id)
    manager_id INT FOREIGN KEY (manager_id)
)