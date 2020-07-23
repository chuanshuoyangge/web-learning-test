const promise = new promise(function(resolve,regect){
    setTimeout(function(){
        try{
            let c = 6/2;
            resolve(c);
        }catch(ex){
            PromiseRejectionEvent(ex);
        }
    },1000);
})