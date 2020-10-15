/* Functions */



// Calling a function
// greeting();
// console.log(greet);
// console.log(nm);
// console.log(age);


// var nm = 'Flag';
// let age = 10;

// // Function declaration
// function greeting(){
//     console.log('Good Evening Everyone');
// }

// // Function expression
// var greet = function(){
//     console.log('Function Expression');
// }


// Arguments and Parameter

    // console.log( 'String'.toUpperCase())
    // const calcPerimeter = function(radius){ // Parameter
    //     // let value = 2*3.14*radius;
    //     return 2*3.14*radius;
    // }

    // let result = calcPerimeter(2); // argument - 2
    // console.log(result);
    // console.log('Perimeter of a circle with a radius of 5', calcPerimeter(5));

// ES 6 Arrow Functions

    // const PI = 3.14;
    // let option = Math.floor(Math.random()*2);
    // let result = 0;

    // console.log(Math.random()); 
    // console.log(Math.ceil(Math.random()*100));
    // console.log(Math.floor(Math.random()*100));

    // const calcPerimeter = function(radius) {
    //     return 2*PI*radius;
    // }
    
    // const calcArea = radius => PI*radius**2;

    // const display = result => console.log(result) ;  

    // if(option === 0){
    //     result = calcPerimeter(3);
    //     display(result);
    // }else{
    //     result = calcArea(3);
    //     display(result);
    // }

    // console.log( 0 == '0'); // Loose comparision
    // console.log(0 === '0'); // Strict Comparision


// Callbacks

    // const myFunc = (callback) => {
    //     let value = 10;
    //     callback(value);
    // }

    // const callbackFunc = (value) => {
    //     console.log('Inside Callback', value);
    // }

    // myFunc(callbackFunc);

    // [1, 2, 3, 4, 5].forEach( item => {
    //     for(let i = 1; i < 11; i++){
    //         console.log(item + '*' + i + '=', (item * i));
    //     }
    // });

// Task 

// Write a function that displays the greeting method 
// of a country based on the choice of a user.
// const countries = ['India', 'Australia', 'Germany', 'France', 'USA'];


// Asynchronous Request 
// fetch('https://jsonplaceholder.typicode.com/todo/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// console.log('I am a code after the request');