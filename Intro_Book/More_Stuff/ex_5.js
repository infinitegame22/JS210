function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething("John"));
console.log(doSomething("hello world")); // ['hello', 'world'] => ['world', 'hello'] => [5, 5]