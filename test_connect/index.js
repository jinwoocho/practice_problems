
var winCount = 0;
            //    y= 0 1 2 3 4 5 6
var test_array =   [[0,0,0,0,0,0,0],  //x=0
                    [1,0,0,0,0,0,0],    //1
                    [1,0,1,1,0,0,1],    //2
                    [0,0,1,0,0,1,0],    //3
                    [1,0,0,0,1,0,0],    //4
                    [1,0,1,1,0,1,0] ];  //5



for (var x = 0; x < test_array.length; x++){
    for(var y = 0; y <= test_array[x].length; y++){
        //for down on dom //side on array
        winCount = 1;
        if(test_array[x][y] == 1) {
            if (test_array[x][y - 1] == test_array[x][y]) {
                winCount++;
                if (test_array[x][y - 2] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x][y - 3] == test_array[x][y]) {
                        winCount++;

                    }
                }
            }
        }
        if (winCount === 4){
            console.log('On 1 you won! :' + 'x:' + x + " y:" + y );
        }
        //for side on dom// down on array
        winCount = 1;
        if(test_array[x][y] == 1) {
            if (test_array[x + 1] && test_array[x + 1][y] == test_array[x][y]) {
                winCount++;
                if (test_array[x+2] && test_array[x + 2][y] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x + 3] && test_array[x + 3][y] == test_array[x][y]) {
                        winCount++;

                    }
                }
            }
        }
        if(test_array[x][y] == 1) {
            if (test_array[x - 1] && test_array[x - 1][y] == test_array[x][y]) {
                winCount++;
                if (test_array[x - 2] && test_array[x - 2][y] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x - 3] && test_array[x - 3][y] == test_array[x][y]) {
                        winCount++;

                    }
                }
            }
        }
        if (winCount === 4){
            console.log('on 2 you won! :'+ 'x:' + x + " y:" + y );
        }
        // for rightUp(leftDown) on dom // downRight(upLeft) on array
        winCount = 1;
        if(test_array[x][y] == 1) {
            if (test_array[x + 1] && test_array[x + 1][y + 1] == test_array[x][y]) {
                winCount++;
                if (test_array[x + 2] && test_array[x + 2][y + 2] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x + 3] && test_array[x + 3][y + 3] == test_array[x][y]) {
                        winCount++;
                    }
                }
            }
        }
        if(test_array[x][y] == 1) {
            if (test_array[x - 1] && test_array[x - 1][y - 1] == test_array[x][y]) {
                winCount++;
                if (test_array[x - 2] && test_array[x - 2][y - 2] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x - 3] && test_array[x - 3][y - 3] == test_array[x][y]) {
                        winCount++;

                    }
                }
            }
        }
        if (winCount === 4){
            console.log('on 3 you won! :' + 'x:' + x + " y:" + y);
        }
        //for rightDown(leftUP) on dom // downLeft(upRight) on array
        winCount = 1;
        if(test_array[x][y] == 1) {
            if (test_array[x + 1] && test_array[x + 1][y - 1] == test_array[x][y]) {
                winCount++;
                if (test_array[x + 2] && test_array[x + 2][y - 2] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x + 3] && test_array[x + 3][y - 3] == test_array[x][y]) {
                        winCount++;
                    }
                }
            }
        }
        if(test_array[x][y] == 1) {
            if (test_array[x - 1] && test_array[x - 1][y + 1] == test_array[x][y]) {
                winCount++;
                if (test_array[x - 2] && test_array[x - 2][y + 2] == test_array[x][y]) {
                    winCount++;
                    if (test_array[x - 3] && test_array[x - 3][y + 3] == test_array[x][y]) {
                        winCount++;

                    }
                }
            }
        }
        if (winCount === 4){
            console.log('on 4 you won! :' + 'x:' + x + " y:" + y);
        }
    }
}




// jinwoo winning condition

function win(){

    down();

    side();
    if (winCount >= 4) {
        console.log(currentPlayer + "win");
    }

}


function down(){
}


function side(){
}












//
// /////////////////
// //for down on dom //side on array
// console.log('1');
// for (var x = 0; x < test_array.length; x++){
//     for(var y = 0; y <= test_array[x].length; y++){
//         winCount = 1;
//         if(test_array[x][y] == 1) {
//             if (test_array[x][y - 1] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x][y - 2] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x][y - 3] == test_array[x][y]) {
//                         winCount++;
//
//                     }
//                 }
//             }
//         }
//         if (winCount === 4){
//             console.log('you won! :' + x + " "+ y );
//         }
//     }
// }
//
//
// //for side on dom// down on array
// console.log('2');
// for (var x = 0; x < test_array.length ; x++) {
//     for (var y = 0; y <= test_array[x].length; y++) {
//         winCount = 1;
//         if(test_array[x][y] == 1) {
//             if (test_array[x + 1] && test_array[x + 1][y] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x+2] && test_array[x + 2][y] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x + 3] && test_array[x + 3][y] == test_array[x][y]) {
//                         winCount++;
//
//                       }
//                   }
//             }
//         }
//         if(test_array[x][y] == 1) {
//             if (test_array[x - 1] && test_array[x - 1][y] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x - 2] && test_array[x - 2][y] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x - 3] && test_array[x - 3][y] == test_array[x][y]) {
//                         winCount++;
//
//                     }
//                 }
//             }
//         }
//         if (winCount === 4){
//             console.log('you won! :' + x + " "+ y );
//
//         }
//     }
// }
//
// // for rightUp(leftDown) on dom // downRight(upLeft) on array
// console.log('3');
// for (var x = 0; x < test_array.length ; x++) {
//     for (var y = 0; y <= test_array[x].length; y++) {
//         winCount = 1;
//         if(test_array[x][y] == 1) {
//             if (test_array[x + 1] && test_array[x + 1][y + 1] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x + 2] && test_array[x + 2][y + 2] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x + 3] && test_array[x + 3][y + 3] == test_array[x][y]) {
//                         winCount++;
//                     }
//                 }
//             }
//         }
//         if(test_array[x][y] == 1) {
//             if (test_array[x - 1] && test_array[x - 1][y - 1] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x - 2] && test_array[x - 2][y - 2] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x - 3] && test_array[x - 3][y - 3] == test_array[x][y]) {
//                         winCount++;
//
//                     }
//                 }
//             }
//         }
//         if (winCount === 4){
//             console.log('you won! :' + x + " "+ y );
//         }
//     }
// }
//
// //for rightDown(leftUP) on dom // downLeft(upRight) on array
// console.log('4');
// for (var x = 0; x < test_array.length ; x++) {
//     for (var y = 0; y <= test_array[x].length; y++) {
//         winCount = 1;
//         if(test_array[x][y] == 1) {
//             if (test_array[x + 1] && test_array[x + 1][y - 1] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x + 2] && test_array[x + 2][y - 2] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x + 3] && test_array[x + 3][y - 3] == test_array[x][y]) {
//                         winCount++;
//                     }
//                 }
//             }
//         }
//         if(test_array[x][y] == 1) {
//             if (test_array[x - 1] && test_array[x - 1][y + 1] == test_array[x][y]) {
//                 winCount++;
//                 if (test_array[x - 2] && test_array[x - 2][y + 2] == test_array[x][y]) {
//                     winCount++;
//                     if (test_array[x - 3] && test_array[x - 3][y + 3] == test_array[x][y]) {
//                         winCount++;
//
//                     }
//                 }
//             }
//         }
//         if (winCount === 4){
//             console.log('you won! :' + x + " "+ y );
//         }
//     }
// }
//

