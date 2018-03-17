function capitalizeFirstLetter(str) {
    //.toLowerCase();
    var splitted = str.split(' ');
    // ['hello', 'world']
    for (var i = 0; i < splitted.length; i++ ){
        // ['hello', 'world']
        //    [0],      [1]
        splitted[i] = splitted[i][0].toUpperCase() + splitted[i].slice(1);
        //               'h', 'w' ->'H', 'W'     +        'ello', 'orld'
        //  => ['Hello','World']
        done = splitted.join(' ');
        //=>    Hello World

    }
    return done;
}
console.log(capitalizeFirstLetter("i don't want to present"));
console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("i ran there"));


