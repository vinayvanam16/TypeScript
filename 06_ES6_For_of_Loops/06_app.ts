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

//Completed

let output = [];
let i = 0;

for(let value of myArray){
    output[i] = value;
    i++;
}

document.getElementById('container').innerHTML = "<h1>" + output.join(' - ') + "</h1>";