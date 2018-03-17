function getData(){
    var promise = {
        then: function(resolve){
            this.resolve = resolve;
        },
        resolve: null
    };
    setTimeout(function(){
        promise.resolve();
    }, 3000);
    return promise;
}
function work(){
    console.log('hoihoih');
}

getData().then(work);