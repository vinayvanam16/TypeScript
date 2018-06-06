/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

//Starter

let array = [10001,'naveen','TechLead'];
let id = array[0];
let myName = array[1];
let designation = array[2];

//Solution

let [id1,myName1,desg] = array;

// Best usage is to exchange the value btw a & b
let a = 10;
let b = 5;

[a,b] = [b,a];

// This is even works for Objects

let emp = {
    id1:10001,
    someName1:'naveen',
    designation1:'sse'
};

let {id1:myId,someName1:someName2,designation1:designation2} = emp;