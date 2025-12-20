let num=[2,4,7,45,28,33,99,105,333];
let res=num.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});
console.log(res);