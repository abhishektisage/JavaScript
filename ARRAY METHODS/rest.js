let doubleAndReturnArgs = (arr, ...args) => {
    let doubledArgs = args.map(num => num * 2);
    return [...arr, ...doubledArgs];
};

// Changed input
console.log(doubleAndReturnArgs([10, 20], 3, 6, 9));
