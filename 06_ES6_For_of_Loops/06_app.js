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
//Completed
var output = [];
var i = 0;
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    output[i] = value;
    i++;
}
document.getElementById('container').innerHTML = "<h1>" + output.join(' - ') + "</h1>";
