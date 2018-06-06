/* This File contains only ES6 Features */
/*
---------------------------------------------------------------------------------
 1. Default Parameters
---------------------------------------------------------------------------------
 This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
    parameters
*/
//Starter
function countdownStarter(final, initial, interval) {
    var current = initial;
    while (current < final) {
        current += interval;
        console.log(current);
    }
}
countdownStarter(0, 10, 1);
// Completed
function countdownCompleted(final, initial, interval) {
    if (initial === void 0) { initial = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current < final) {
        current += interval;
        console.log(current);
    }
}
countdownCompleted(10);
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
var displayNameCompleted = "Meet Mr ." + employeeCompleted.name;
var someString = "<h1> Meet Mr. <span>" + employeeCompleted.name + "</span> </h1>";
console.log(displayNameCompleted);
document.getElementById('container').innerHTML = someString;
/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
//problem
for (var i = 0; i <= 10; i++) {
    var counter = i;
}
console.log(counter);
// if we are using var keyword, the variable declared inside loop is also accessible
// outside the loop also
// by using let we cannot
// Const
// This is used for final variable declaration in TS. once declared we cannot modify this.
for (var i_1 = 0; i_1 <= 10; i_1++) {
    var counter_1 = i_1;
    //counter = 1; // read only property
}
/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
//Starter
var myArray = ['html', 'javascript', 'css', 'bootstrap'];
for (var index in myArray) {
    var value = myArray[index];
    console.log(value);
}
// solution
var myArray1 = ['html', 'javascript', 'css', 'bootstrap'];
for (var _i = 0, myArray1_1 = myArray1; _i < myArray1_1.length; _i++) {
    var value = myArray1_1[_i];
    console.log(value);
}
/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
//ex:
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// After
var movieLength1 = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength1);
// or
var movieLength2 = movies.map(function (movie) { return movie.length; });
console.log(movieLength2);
/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
//Ex:
var array = [10001, 'naveen', 'TechLead'];
var id = array[0];
var myName = array[1];
var designation = array[2];
//Solution
var id1 = array[0], myName1 = array[1], desg = array[2];
// Best usage is to exchange the value btw a & b
var a = 10;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1];
// This is even works for Objects
var emp = {
    id1: 10001,
    someName1: 'naveen',
    designation1: 'sse'
};
var myId = emp.id1, someName2 = emp.someName1, designation2 = emp.designation1;
/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//Ex:
function Employee() {
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
    var values = [];
    for (var i_2 = 0; i_2 < arguments.length; i_2++) {
        values[i_2] = arguments[i_2];
    }
    return values;
}
var newEmployee1 = ['vinay', 'vanam', 30, 'TechLead'];
var _a;
// let someEmp = Employee.(newEmployee1);
// console.log(someEmp);
