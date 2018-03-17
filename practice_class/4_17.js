function RectangleArea(strArr){
    var x = [];
    var y = [];
    var avgX = null;
    var avgY = null;
    var addX = null;
    var addY = null;
    for(var i = 0; i < strArr.length ;i++){
        x.push(strArr[i][0]);
        y.push(strArr[i][1]);
        addX += x[i];
        addY += y[i];
    }
    var avgX = (addX/x.length);
    var avgY = (addY/y.length);
    var RArea = avgX * avgY;
    console.log(avgX);
    console.log('x:' + x +" "+ 'y:' + y);
    console.log(RArea);
}

//         0     1      2     3
//        [0,1] [0,1] [0,1] [0,1]
// var strArr = [[1,1],[1,3],[3,1],[3,3]];
var strArr = [[0,0],[1,0],[1,1],[0,1]];
console.log(RectangleArea(strArr));

//my knowlege was wrong. need to fix this