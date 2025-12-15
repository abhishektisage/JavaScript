function roll(max){
    let random=Math.floor(Math.random()*max)+1;
    return random;
}
let max=6;
let result=roll(max);
console.log(result);