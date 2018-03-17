// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.
//
//     Write a function that takes one parameter
// Parameter 1 - An Array of strings
// The function should output an array containing all the strings from the input array but in alphabetical order
// Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
// sort(myArray);
// Output - ['cat', 'dog', 'human', 'mouse']

//example of the bubble sort.
var array = [1,3,2];
function bubbleSort(array){
    var i, j , lim;
    lim = array.length;while(lim--){
        for (i = 0, j = 1; i < lim; ++i, ++j)
            if(array[i]>array[j]){temp = array[i];array[i] = array[j]; array[j] = temp;}

    }
    return array;
}
console.log(bubbleSort(array));
//---------------------------------------------------------------------------------------------------
