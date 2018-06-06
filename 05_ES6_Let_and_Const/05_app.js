/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
//problem
for (var i = 0; i < 10; i++) {
    var myName = "naveen";
}
console.log(myName);
document.getElementById('container').innerHTML = myName;
// if we are using var keyword, the variable declared inside loop is also accessible
// outside the loop also
// by using let we cannot
// Const
// This is used for final variable declaration in TS. once declared we cannot modify this.
for (var i_1 = 0; i_1 <= 10; i_1++) {
    var counter = i_1;
}
