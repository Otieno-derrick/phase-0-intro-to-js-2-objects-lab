// Write your solution in this file!
const  employee = {
  name: "Sam",
  streetAddress: "Kisumu",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {...employee, [key]:value}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let employeed = {...employee};
    delete employeed[key];
    return employeed
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
