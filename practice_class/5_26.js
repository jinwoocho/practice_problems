var arr = [3, -1, -1, 4, 3, -1];
var addArr = [];
var big = 0;
var save = 0;
function MaxSubarray(arr){
    // console.log(arr);
    for (var i = 0; i < arr.length;i++) {
        // console.log(arr[i]);
        for (var x = i; x < arr.length; x++) {
            addArr.push(arr[x]);
            big += arr[x];
            if (big > save) {
                save = big;
                var savedArr = addArr;
            }
        }
        big = 0;
        addArr=[];
    }
    console.log('biggest add in array is ' + save + ' and the array of it is '+ savedArr);
}
MaxSubarray(arr);

/*
 Challenge
 Using the JavaScript language, have the function
 MaxSubarray(arr) take the array of numbers stored
 in arr and determine the largest sum that can be
 formed by any contiguous subarray in the array.
 For example, if arr is [-2, 5, -1, 7, -3] then
 your program should return 11 because the sum
 is formed by the subarray [5, -1, 7]. Adding any
 element before or after this subarray would make
 the sum smaller.

 Sample Test Cases
 Input:[1, -2, 0, 3]
 Output:3

 Input:[3, -1, -1, 4, 3, -1]
 Output:8*/