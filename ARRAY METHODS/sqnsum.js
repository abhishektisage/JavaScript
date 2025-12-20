let arr = [1, 2, 3, 4, 5];

let sqnsum = (arr) => {
    let sq = arr.map(num => num * num);               // square
    let sum = sq.reduce((total, num) => total + num, 0); // sum
    let avg = sum / arr.length;                       // average
    return avg;
};

console.log(sqnsum(arr));
