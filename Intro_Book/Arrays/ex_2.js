let myArray = [1, 3, 6, 11, 4, 2,
    4, 9, 17, 16, 0];

myArray.forEach(myFunction);

function myFunction(item) {
   if (item % 2 === 0) {
       console.log(item)
   }
}
