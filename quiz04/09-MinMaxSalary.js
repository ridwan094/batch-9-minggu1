const employees = require("./01-Employees");

function sortSalary(employees) {
    let sorting = employees.sort((employeesX,employeesY) => {
        return employeesX.salary - employeesY.salary;
    });
    return ["Upah karyawan " + sorting[0].salary, "upah manager " + sorting[sorting.length-1].salary];
}
console.log(sortSalary(employees));