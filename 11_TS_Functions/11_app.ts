// Create a simple function to add two numbers

let sum:number;
function addNums(num1:number,num2:number):number{
     sum = num1 + num2;
    return sum;
}
addNums(10,20);


// Create the same add function with first number as 'any' type

let sum1:number;
function addAnyNums(num1:any,num2:number):number{
    if(typeof num1 == "string"){
        if(isNaN(parseInt(num1,10))){
            return 0;
        }
        num1 = parseInt(num1,10);
    }
    sum1 = num1 + num2;
    return sum1;
}

addAnyNums('10',30);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers

function findMax(a:number);
function findMax(a:number,b:number);
function findMax(a:number,b:number,c:number);
function findMax(a:number,b?:number,c?:number){
    if( b === undefined && c === undefined){
        return a;
    }
    else if( c === undefined){
        if(a > b){
            return a ;
        }
        else{
            return b;
        }
    }
    else{
        if(a > b && a > c){
            return a;
        }
        else if(b > c){
            return b;
        }
        else{
            return c;
        }
    }
}

findMax(10);
findMax(10,20);
findMax(10,20,30);
//findMax(10,20,30,40);


// Create an Employee function and get an Employee Object
