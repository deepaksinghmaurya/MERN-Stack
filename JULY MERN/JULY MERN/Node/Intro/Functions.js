function f1(){
    console.log('Normal Function');
}

f1();


function f3(someFunction){
    someFunction();
}


// Function expression
var f2 = function(){
    console.log('Inside Function 2');
}
f2();

f3(f2);




