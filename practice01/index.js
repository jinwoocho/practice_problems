// Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.
//
//     Write a function that takes two parameters
// Parameter 1 - A string
// Parameter 2 - An array of strings
// The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
// Example:
//     var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
// biggerWords('whales', myArray);
// Output - ['reptile', 'mammoth', 'turtles']


var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
function bigger(compare1 , compare2){
    for(var i = 0; i < compare2.length; i++){
        if(compare1.length < compare2[i].length){
            console.log(compare2[i]);
        }
    }
}

bigger('whales', myArray);