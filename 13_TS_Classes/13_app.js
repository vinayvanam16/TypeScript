// Create a simple class and usage
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return " Hello " + this.greeting;
    };
    Object.defineProperty(Greeter.prototype, "getGreetMessage", {
        get: function () {
            return this.greeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Greeter.prototype, "setGreetMessge", {
        set: function (message) {
            this.greeting = message;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter("Naveen");
console.log(greeter.greet());
var greetMessage = greeter.getGreetMessage;
console.log(greetMessage);
greeter.setGreetMessge = 'John';
console.log(greeter.getGreetMessage);
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
