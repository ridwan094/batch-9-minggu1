const employees = require("./01-Employees");

function salaryRange(employees, minSalary, maxSalary) {
    // let count = '';
    const salary = employees.filter(employee => parseInt(employee.salary) >= minSalary && parseInt(employee.salary) <= maxSalary);
    // salary.forEach(employee => {
    //     count += `${employee.first_name} ${employee.last_name} \n`;
    // });
    return salary;
}

console.log(salaryRange(employees, 2400, 4800));