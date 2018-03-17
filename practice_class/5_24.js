/*
 Using the JavaScript language, have the function SerialNumber(str)
 take the str parameter being passed and determine if it is a valid
 serial number with the following constraints:

 1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
 2. The first set of digits must add up to an even number.
 3. The second set of digits must add up to an odd number.
 4. The last digit in each set must be larger than the two previous digits in the same set.

 If all the above constraints are met within the string, the your
 program should return the string true, otherwise your program should
 return the string false. For example: if str is "224.315.218" then
 your program should return "true".

 DO NOT USE REGEX... yet
 */
/*
 Input:"11.124.667"
 Output:"false"

 Input:"114.568.112"
 Output:"true"
 */

function serialNumber(){
    var split = str.split('.');
    var striLength = null;
    // console.log(split[0].length);
    for(var i = 0; i < split.length; i++){
        console.log(split[i].length);
        striLength.push(split[i].length);
        console.log(striLength);
        if(isNaN(split[i])){
            return false;
        }
        // need to finish this
    }
}

console.log(serialNumber('11.124.667'));
console.log(serialNumber('114.568.112'));