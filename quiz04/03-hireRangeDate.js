const employees = require("./01-Employees");
console.log(employees[1]);

function salaryRange(employees, startDate, endDate) {
    const sort = employees.filter(emp => emp.manager_id === null & emp.hire_date === startDate && emp.hire_date === endDate);
    return sort;
}

console.log(salaryRange(employees, '12-01-1993','12-12-1995'));
