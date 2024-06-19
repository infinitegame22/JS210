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

let temperatures = [-32, 43, 21, 12, 0]

console.log(average(temperatures));