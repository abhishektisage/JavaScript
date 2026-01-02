function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success:data was saved");
        }
        else{
            reject("failure:weak connection");
        }
    })
}

let req=savetoDb("abhishek");
req.then(()=>{
    console.log("Promisenwas resolved");
    console.log(req);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(req);

});