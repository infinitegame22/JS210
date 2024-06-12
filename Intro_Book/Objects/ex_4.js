let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let obj1 = Object.keys(obj);
console.log(obj1);

const obj2 = obj1.map((element) => element.toUpperCase());

console.log(obj2);