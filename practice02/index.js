// Build a function that takes in an array and reverses it

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
// var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

var myArray =['hello', 45, 'Bob', 'what', '23'];
var revArr = [];
function arrayReverse(){
    for (var i = myArray.length-1; i >= 0; i--){
        revArr.push(myArray[i])
    }
    return revArr;
}
console.log(arrayReverse());

// var myArray =['hello', 45, 'Bob', 'what', '23'];
// myArray.reverse();
// console.log(myArray)