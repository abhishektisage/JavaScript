let str = ["hi", "abhishek ", "!"];

function concat(str) {
    let res = "";   // initialize
    for (let i = 0; i < str.length; i++) {
        res += str[i];
    }
    return res;
}

let ans = concat(str);
console.log(ans);
