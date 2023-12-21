// Write your solution in this file!
let employee = {
    name: 'John',
    age: 30,
    role: 'Software Engineer'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
let updatedEmployee = Object.assign({}, employee);
updatedEmployee[key]= value;
return updatedEmployee;
}
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Ada');
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key,) {
    let clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
