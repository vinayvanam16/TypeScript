/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
// Starter
var employee = {
    id: 1001,
    name: "Naveen",
    designation: "Technical Tead"
};
var displayName = "Meet Mr ." + employee.name;
console.log(displayName);
// Completed
var employeeCompleted = {
    id: 1001,
    name: "Naveen",
    designation: "Technical Tead"
};
var output = "<h1> Meet Mr. " + employeeCompleted.name + " who is with the Id : " + employeeCompleted.id + " and with \nthe Designation " + employeeCompleted.designation + "</h1>";
document.getElementById('container').innerHTML = output;
