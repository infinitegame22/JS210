function hello(greeting, name) {
    return greeting + ' ' + name;
}

function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

console.log(hello.prototype);
console.log(howdy.prototype);
console.log(xyzzy.prototype);