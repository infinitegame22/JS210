/*
input: object, possible array object
output: new object containing either all of the key-value pairs of the original object,
or if there is the array object, the new (hash) object contains only the keys and associated
values mentioned in the array


 */
function copyObj(sourceObject, keys) {
    let destinationObject = {};

    if (keys) {
        keys.forEach(function(key) {
            destinationObject[key] = sourceObject[key];
        });

        return destinationObject;
    } else {
        return Object.assign(destinationObject, sourceObject);
    }
}

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
