async function greet(){
    return "helooo!!";
}
greet()
.then((result)=>{
    console.log("promised was resolved");
    console.log("result was:",result);
})
.catch((err)=>{
    console.log("promise was rejected",err);
});