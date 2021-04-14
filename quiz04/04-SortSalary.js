const employees = require("./01-Employees");

const sortSalary = (employees) => {
    const sort = employees.sort((x, y) => {
        return x.salary - y.salary;
    });
    return sort;
}

console.log(sortSalary(employees));