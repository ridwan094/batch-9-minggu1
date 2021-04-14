const employees = require("./01-Employees");

function searchEmployee(employees, prefix) {
    return employees.filter(employee => employee.first_name.startsWith(prefix));
}

console.log(searchEmployee(employees, 'D'));