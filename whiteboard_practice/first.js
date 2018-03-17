function insideOut(str) {
    var array = str.split("");
    var middle = array.length / 2;
    var side1 = array.slice(0, middle);
    var side2 = array.slice(middle, array.length);
    side1.reverse();
    side2.reverse();
    array = side1.concat(side2);
    array.toString();
    console.log(array);
}
console.log(insideOut("madmen"));