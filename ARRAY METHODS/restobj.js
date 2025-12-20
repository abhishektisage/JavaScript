let mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

// Example
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };

console.log(mergeObjects(object1, object2));
