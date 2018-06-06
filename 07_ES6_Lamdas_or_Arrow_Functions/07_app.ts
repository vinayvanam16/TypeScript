/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/


//ex:

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

console.log(movieLength);

// Completed

let movieLength1 =  movies.map((movie) => {
    return movie.length;
});

console.log(movieLength1);

let movieLength2 =  movies.map(movie => movie.length);
console.log(movieLength2);