const { Employee } = require("./employee");

const employeeTest = new Employee("Alice", 100);

console.log(employeeTest.name);
console.log(employeeTest.salary);

employeeTest.increaseSalary();

console.log(employeeTest.salary);