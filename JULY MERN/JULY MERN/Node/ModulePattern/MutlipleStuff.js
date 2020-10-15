
var counter = function(arr){
    return `this array has ${arr.length} elements`;
}

var addition = function(a, b){
    return `sum is ${a+b}`;
}

var constant = 3.14;


// module.exports.counter = counter;
module.exports.addition = addition;
// module.exports.constant = constant;
module.exports = counter;
module.exports.constant = constant;


// module.exports = {
//     counter: counter,
//     addition: addition,
//     constant: constant
// }