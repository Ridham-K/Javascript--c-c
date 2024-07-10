const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();        
    },1000)
}).then(function(){
    console.log('Async task 2 is resolved');
})

//newPromisethree