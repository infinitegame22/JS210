console.log(typeof("foo")); // String - primitive
console.log(typeof(3.1415)); // Number - primitive
console.log(typeof([ 'a', 'b', 'c' ])) //Object
console.log(typeof(false)) // Boolean object - primitive value false
// - `foo` is neither because it is a variable (uninitialized)
console.log(typeof(function bar() { return "bar"; })); // object of the Function class
console.log(typeof(undefined));  // primitive type
console.log(typeof({ a: 1, b: 2 })); // Object