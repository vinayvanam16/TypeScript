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

function countdownStarter(final,initial,interval){
    let current  = initial;
    while(current < final){
        current += interval;
        console.log(current);
    }
}

countdownStarter(0,10,1);

// Completed

function countdownCompleted(final,initial=0,interval=1){
    let current  = initial;
    while(current < final){
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

let employee = {
    id:1001,
    name:"vinay",
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

let displayNameCompleted =  "Meet Mr ." + employeeCompleted.name;
let someString = `<h1> Meet Mr. <span>${employeeCompleted.name}</span> </h1>`;
console.log(displayNameCompleted);
document.getElementById('container').innerHTML = someString;

/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

//problem

for(var i=0;i<=10;i++){
    var counter = i;
}
console.log(counter);

// if we are using var keyword, the variable declared inside loop is also accessible
// outside the loop also
// by using let we cannot

// Const

// This is used for final variable declaration in TS. once declared we cannot modify this.

for(let i:number=0; i<=10; i++){
    const counter = i;
    //counter = 1; // read only property
}


/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

//Starter

let myArray = ['html','javascript','css','bootstrap'];

for(let index in myArray){
    let value = myArray[index];
    console.log(value);
}

// solution
let myArray1 = ['html','javascript','css','bootstrap'];

for(let value of myArray1){
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

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

console.log(movieLength);

// After

let movieLength1 =  movies.map((movie) => {
    return movie.length;
});

console.log(movieLength1);


// or

let movieLength2 =  movies.map(movie => movie.length);
console.log(movieLength2);

/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

//Ex:

let array = [10001,'naveen','TechLead'];
 let id = array[0];
 let myName = array[1];
 let designation = array[2];

//Solution

let [id1,myName1,desg] = array;

// Best usage is to exchange the value btw a & b
 var a = 10;
 var b = 5;

 [a,b] = [b,a];

 // This is even works for Objects

var emp = {
    id1:10001,
    someName1:'naveen',
    designation1:'sse'
};

var {id1:myId,someName1:someName2,designation1:designation2} = emp;

/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

//Ex:

function Employee(){
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
    let values = [];
    for(let i=0; i<arguments.length;i++){
        values[i] = arguments[i];
    }
    return values;
}

let newEmployee1 = ['vinay','vanam',30,'TechLead'];
// let someEmp = Employee.(newEmployee1);
// console.log(someEmp);
