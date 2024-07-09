Garage App
Overview
The Garage App is designed to manage the operations of a garage, including employee management, customer management, service tracking, and order processing. This README file provides an overview of the navigation structure and key pages within the app.

Navigation Links
Root Level Public Pages
Home Page: /
About Us Page: /about
Services Page: /services
Contact Us Page: /contact
Login Page: /login
Order Details: /order/{orderHash}
Admin (Login Required)
Admin Dashboard: /admin
Employees: /admin/employees
Add Employee: /admin/add-employee
Edit Employee: /admin/employee/edit/:id
Customers: /admin/customers
Add Customer: /admin/add-customer
Edit Customer: /admin/customer/edit/:id
Customer Details: /admin/customer/{customerId}
Add Vehicle: /admin/customer/{customerId} (conditionally displayed on the customer details page)
Orders: /admin/orders
Add Order: /admin/order
Edit Order: /admin/order/{orderHash}/edit
Services: /admin/services
Add Service: /admin/add-service
Admin/Private Pages with Explanations
Admin Dashboard: /admin
Displays a list of internal pages for easier navigation.
Employees: /admin/employees
Shows a list of all added employees.
Add Employee: /admin/add-employee
Allows for adding a new employee.
Edit Employee: /admin/employee/edit/:id
Enables editing of an existing employee.
Customers: /admin/customers
Displays a list of all added customers.
Add Customer: /admin/add-customer
Allows for adding a new customer.
Edit Customer: /admin/customer/edit/:id
Enables editing of an existing customer.
Orders: /admin/orders
Shows a list of all added orders.
Add Order: /admin/order
Allows for adding a new order.
Edit Order: /admin/order/{orderHash}/edit
Enables updating the status of an existing order.
Order Details: /admin/order/{orderHash}
Displays the details of an existing order. Customers can also use this page to check the status of their order.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes.
Push to your branch.
Create a pull request with a detailed description of the changes.
