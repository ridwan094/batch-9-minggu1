const employees = require("./01-Employees");

const totalEmployeeByDepartment = (id) => {
const filterDepartment = (employees, department_id) => {
    return employees.filter(x => x.department_id === department_id);
    }
    console.log(filterDepartment(id, 6));
}

totalEmployeeByDepartment(employees);