// Import mysql2 module Promise wrapper
import mysql from 'mysql2/promise'

// Create connection parameters to connect to the database
const connectionParams = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
}

//Create connection pool
const connectionPool = mysql.createPool(connectionParams)

let customer_identifier = `CREATE TABLE IF NOT EXISTS customer_identifier (
  customer_id int(11) NOT NULL AUTO_INCREMENT,
  customer_email varchar(255) NOT NULL,
  customer_phone_number varchar(255) NOT NULL,
  customer_added_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  customer_hash varchar(255) NOT NULL,
  PRIMARY KEY (customer_id),
  UNIQUE (customer_email)
) ENGINE=InnoDB`
let customer_info = `CREATE TABLE IF NOT EXISTS customer_info (
  customer_info_id int(11) NOT NULL AUTO_INCREMENT,
  customer_id int(11) NOT NULL, 
  customer_first_name varchar(255) NOT NULL,
  customer_last_name varchar(255) NOT NULL,
  active_customer_status int(11) NOT NULL,
  PRIMARY KEY (customer_info_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB`
let customer_vehicle_info = `CREATE TABLE IF NOT EXISTS customer_vehicle_info (
  vehicle_id int(11) NOT NULL AUTO_INCREMENT,
  customer_id int(11) NOT NULL, 
  vehicle_year int(11) NOT NULL,
  vehicle_make varchar(255) NOT NULL,
  vehicle_model varchar(255) NOT NULL,
  vehicle_type varchar(255) NOT NULL,
  vehicle_mileage int(11) NOT NULL, 
  vehicle_tag varchar(255) NOT NULL,
  vehicle_serial varchar(255) NOT NULL,
  vehicle_color varchar(255) NOT NULL,
  PRIMARY KEY (vehicle_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB`
let company_roles = `CREATE TABLE IF NOT EXISTS company_roles (
  company_role_id int(11) NOT NULL AUTO_INCREMENT,
  company_role_name varchar(255) NOT NULL,
  PRIMARY KEY (company_role_id),
  UNIQUE (company_role_name)
) ENGINE=InnoDB`
let common_services = `CREATE TABLE IF NOT EXISTS common_services (
  service_id int(11) NOT NULL AUTO_INCREMENT,
  service_name varchar(255) NOT NULL,
  service_description TEXT,
  PRIMARY KEY (service_id)
) ENGINE=InnoDB`
let employee = `CREATE TABLE IF NOT EXISTS employee (
  employee_id int(11) NOT NULL AUTO_INCREMENT,
  employee_email varchar(255) NOT NULL,
  active_employee int(11) NOT NULL,
  added_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id), 
  UNIQUE (employee_email)
) ENGINE=InnoDB`
let employee_info = `CREATE TABLE IF NOT EXISTS employee_info (
  employee_info_id int(11) NOT NULL AUTO_INCREMENT,
  employee_id int(11) NOT NULL,
  employee_first_name varchar(255) NOT NULL,
  employee_last_name varchar(255) NOT NULL,
  employee_phone varchar(255) NOT NULL,
  PRIMARY KEY (employee_info_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB`
let employee_pass = `CREATE TABLE IF NOT EXISTS employee_pass (
  employee_pass_id int(11) NOT NULL AUTO_INCREMENT,
  employee_id int(11) NOT NULL,
  employee_password_hashed varchar(255) NOT NULL,
  PRIMARY KEY (employee_pass_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB`
let employee_role = `CREATE TABLE IF NOT EXISTS employee_role (
  employee_role_id int(11) NOT NULL AUTO_INCREMENT,
  employee_id int(11) NOT NULL,
  company_role_id int(11) NOT NULL,
  PRIMARY KEY (employee_role_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (company_role_id) REFERENCES company_roles(company_role_id)
) ENGINE=InnoDB`
let orders = `CREATE TABLE IF NOT EXISTS orders (
  order_id int(11) NOT NULL AUTO_INCREMENT,
  employee_id int(11) NOT NULL,
  customer_id int(11) NOT NULL,
  vehicle_id int(11) NOT NULL,
  order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  active_order int(11) NOT NULL,
  order_hash varchar(255) NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id), 
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id),
  FOREIGN KEY (vehicle_id) REFERENCES customer_vehicle_info(vehicle_id)
) ENGINE=InnoDB`
let order_info = `CREATE TABLE IF NOT EXISTS order_info (
  order_info_id int(11) NOT NULL AUTO_INCREMENT,
  order_id int(11) NOT NULL,
  order_total_price int(11) NOT NULL,
  estimated_completion_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  completion_date DATETIME,
  additional_request TEXT,
  notes_for_internal_use TEXT,
  notes_for_customer TEXT,
  additional_requests_completed int(11) NOT NULL,
  PRIMARY KEY (order_info_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB`

let order_services = `CREATE TABLE IF NOT EXISTS order_services (
  order_service_id int(11) NOT NULL AUTO_INCREMENT,
  order_id int(11) NOT NULL,
  service_id int(11) NOT NULL,
  service_completed int(11) NOT NULL,
  PRIMARY KEY (order_service_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (service_id) REFERENCES common_services(service_id)
) ENGINE=InnoDB`

let order_status = `CREATE TABLE IF NOT EXISTS order_status (
  order_status_id int(11) NOT NULL AUTO_INCREMENT,
  order_id int(11) NOT NULL,
  order_status int(11) NOT NULL,
  PRIMARY KEY (order_status_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB`

let company_roles_data = `INSERT INTO company_roles (company_role_name)
VALUES ('Employee'), ('Manager'), ('Admin')`

let employee_data = `INSERT INTO employee (employee_email, active_employee, added_date)
VALUES ('admin@admin.com', 1, CURRENT_TIMESTAMP)`

let employee_info_data = `INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone)
VALUES (1, 'Admin', 'Admin', 555-555-5555)`

let employee_pass_data = `INSERT INTO employee_pass (employee_id, employee_password_hashed)
VALUES (1, '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi')`

let employee_role_data = `INSERT INTO employee_role (employee_id, company_role_id)
VALUES (1, 3)`

// connectionPool.query(customer_identifier, (err, results) =>{
//     if(err) throw err
//     console.log("Customer identifier table created")
// })
// connectionPool.query(customer_info, (err, results) =>{
//     if(err) throw err
//     console.log("Customer info table created")
// })
// connectionPool.query(customer_vehicle_info, (err, results) =>{
//     if(err) throw err
//     console.log("Customer vehicle info table created")
// })
// connectionPool.query(company_roles, (err, results) =>{
//     if(err) throw err
//     console.log("Company roles table created")
// })
// connectionPool.query(common_services, (err, results) =>{
//     if(err) throw err
//     console.log("Common services table created")
// })
// connectionPool.query(employee, (err, results) =>{
//     if(err) throw err
//     console.log("Employee table created")
// })
// connectionPool.query(employee_info, (err, results) =>{
//     if(err) throw err
//     console.log("Employee info table created")
// })
// connectionPool.query(employee_pass, (err, results) =>{
//     if(err) throw err
//     console.log("Employee password table created")
// })
// connectionPool.query(employee_role, (err, results) =>{
//     if(err) throw err
//     console.log("Employee role table created")
// })
// connectionPool.query(orders, (err, results) =>{
//     if(err) throw err
//     console.log("Orders table created")
// })
// connectionPool.query(order_info, (err, results) =>{
//     if(err) throw err
//     console.log("Order info table created")
// })
// connectionPool.query(order_services, (err, results) =>{
//     if(err) throw err
//     console.log("Order services table created")
// })
// connectionPool.query(order_status, (err, results) =>{
//     if(err) throw err
//     console.log("Order status table created")
// })
// connectionPool.query(company_roles_data, (err, results) =>{
//     if(err) throw err
//     console.log("Company roles data inserted")
// })
// connectionPool.query(employee_data, (err, results) =>{
//     if(err) throw err
//     console.log("Employee data inserted")
// })
// connectionPool.query(employee_info_data, (err, results) =>{
//     if(err) throw err
//     console.log("Employee info data inserted")
// })
// connectionPool.query(employee_pass_data, (err, results) =>{
//     if(err) throw err
//     console.log("Employee password data inserted")
// })
// connectionPool.query(employee_role_data, (err, results) =>{
//     if(err) throw err
//     console.log("Employee role data inserted")
// })


//Prepare a functin that excuet sql queries asynchronously
export async function query(sql, params){
    const [rows, fields] = await connectionPool.execute(sql, params)
    console.log("connected!")
    return rows
}
