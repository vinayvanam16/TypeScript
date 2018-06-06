/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/


// Starter

let employee = {
    id:1001,
    name:"Naveen",
    designation:"Technical Tead"
};

let displayName =  "Meet Mr ." + employee.name;
console.log(displayName);


// Completed

let employeeCompleted = {
    id:1001,
    name:"Naveen",
    designation:"Technical Tead"
};


let output = `<h1> Meet Mr. ${employeeCompleted.name} who is with the Id : ${employeeCompleted.id} and with 
the Designation ${employeeCompleted.designation}</h1>`;
document.getElementById('container').innerHTML = output;
