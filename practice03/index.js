// Build a function that sorts an array into a multidimensional array grouped by data type

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output a multidimensional array grouped by data type
// Example:
// var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
// groupArray(myArray);
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
var myNewArray = [];
var stringArray = [];
var numberArray = [];
var booleanArray = [];
function sortDataType(){
    for(var i = 0; i < myArray.length; i++){
        if(typeof myArray[i] === 'string'){
            stringArray.push(myArray[i]);
        }
        if(typeof myArray[i] === 'number'){
            numberArray.push(myArray[i])
        }
        if(typeof myArray[i] === 'boolean'){
            booleanArray.push(myArray[i])
        }
    }
    myNewArray.push(stringArray,numberArray,booleanArray);
    console.log(myNewArray);
}
sortDataType();