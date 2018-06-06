// Create a Student Interface , and printStudent function

interface Student{
    name:string;
    age:number;
    course:string;
    address:{
        city:string;
        state:string;
        country:string;
    };
}

function printStudent(student:Student){
    console.log(student);
}

let myStudent1 = {
    name:"naveen",
    age:29,
    course:"CSE",
    address:{
        city:"Hyderabad",
        state:"Telangana",
        country:"India"
    }
};

let myStudent2 = {
    name:"naveen",
    age:29,
    course:"CSE",
    address:{
        city:"Hyderabad",
        state:"Telangana",
        country:"India"
    }
};


printStudent(myStudent1);
printStudent(myStudent2);