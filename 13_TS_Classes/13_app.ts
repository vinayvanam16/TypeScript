// Create a simple class and usage
interface Something{
    someVar:string;
    greetInter():void;
}

class Greeter implements Something{

    someVar:string = "Naveen";

    greetInter():void{
        console.log("This is in Greeter Class" + this.someVar);
    }

    greeting:string;

    constructor(greeting:string){
        this.greeting = greeting;
    }

    greet(){
        return " Hello " + this.greeting;
    }

    get getGreetMessage(){
        return this.greeting;
    }

    set setGreetMessge(message:string){
        this.greeting = message;
    }
}

let greeter = new Greeter("Naveen");
console.log(greeter.greet());

let greetMessage = greeter.getGreetMessage;

console.log(greetMessage);

greeter.setGreetMessge = 'John';

console.log(greeter.getGreetMessage);

// add a constructor to a class


// add methods to a class

// add getter and setter methods of a class

