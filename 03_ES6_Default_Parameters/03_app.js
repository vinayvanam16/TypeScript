/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Starter Function
function countdownStarter(final, initial, interval) {
    var current = initial;
    while (current < final) {
        current += interval;
        console.log(current);
    }
}
//countdownStarter(0,10,1);
// Completed
function countdownCompleted(final, initial, interval) {
    if (initial === void 0) { initial = 0; }
    if (interval === void 0) { interval = 1; }
    var myArray = [];
    var i = 0;
    var current = initial;
    while (current < final) {
        current += interval;
        myArray[i] = current;
        i++;
        console.log(current);
    }
    return myArray;
}
var output = countdownCompleted(10);
document.getElementById('container').innerHTML = "<h2>" + output.join('-') + "</h2>";
