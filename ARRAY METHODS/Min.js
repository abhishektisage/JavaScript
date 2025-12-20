let num=[2,4,7,45,28,33,99,105,333];
let res=num.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
});
console.log(res);