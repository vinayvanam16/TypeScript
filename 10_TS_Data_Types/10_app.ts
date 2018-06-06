/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/

let isDone:boolean = true;
console.log(isDone);



/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */

let color: string = "blue";
color = 'red';

// You can also use template strings, which can span multiple lines and have embedded expressions.

let fullName: string = `Naveen Saggam`;
let age: number = 29;
let sentence: string = `Hello, my name is ${ fullName }`;


/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1,2,3];

/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */

enum Color {
    Red , Green , Blue
}

let c:Color = Color.Blue;

/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */

function warnUser(): void {
    alert("This is my warning message");
}

/*
    undefined and null
    these datatypes are used to assign values to themselves
 */