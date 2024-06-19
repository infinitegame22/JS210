function sum(values) {
  let total = 0;
  for (let index = 0; index < values.length; index+=1){ 
    total += values[index];
  }
  return total;
}


function average(values) {
  return sum(values) / values.length;
}

console.log(sum([54, 1, 2, 3, 4]))
console.log(average([54, 67, 89, 21, 344]));