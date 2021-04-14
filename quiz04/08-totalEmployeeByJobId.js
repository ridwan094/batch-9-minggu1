const employees = require("./01-Employees");

const totalEmployeeByJobId = (id) => {
const filterjob = (employees, job_id) => {
    return employees.filter(x => x.job_id === job_id);
    }
    console.log(filterjob(id, 6));

}

totalEmployeeByJobId(employees);