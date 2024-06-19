function average(array) { 
  let total = 0;
  for (let index = 0; index < array.length; index += 1) {
    // arrayArg[index] -- access the value and do something with it
    total += array[index]
  }
  return total/array.length;
}

console.log(average([0, 45, 67, 90, 104]))