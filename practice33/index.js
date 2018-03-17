// Build a function, invert_negatives, that takes a number as a parameter, and if the number is positive, it makes it negative. If it isn't a number, it returns false

// - invert_negatives(-5)
// 	- Returns: -5
// - invert_negatives(4000)
// 	- Returns: -4000
// - invert_negatives('puppies')
// 	- Returns: false

function invert_negatives(numb){
    if(isNaN(numb)){
        return false;
    } else {
        inv_num = -Math.abs(numb);
        return inv_num;
    }
}
console.log(invert_negatives('oyp'));