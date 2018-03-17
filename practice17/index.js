
function skippy_numbers(start){
    array = [];
    count = 1;
    array.push(start);
    start += 1;
    add();
    function add(){
        if(count <= start){
            array.push(start);
            count++;
            start += 1;
            if(array.length === 10){
                return
            }
        }
        skip();
    }
    function skip(){
        if(count === start) {
            array.push(start);
            array.pop();
            start += 1;
            count = 0;

            if(array.length === 10){
                return;
            }
        }
        add();
    }
    console.log(array);
}

skippy_numbers(2);

//knowldge is wrong