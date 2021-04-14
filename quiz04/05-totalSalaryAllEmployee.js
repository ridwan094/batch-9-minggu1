const employees = require("./01-Employees");

function totalSalaryAllEmployee(employee) {
    let total = employee.reduce((val, element) => {
        return val + parseInt(element.salary)
    }, 0);
    console.log(total);
}

totalSalaryAllEmployee(employees);