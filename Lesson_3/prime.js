function isPrime(number) {
   if (number <= 1 || (number > 2 && number % 2 == 0)) {
       return false;
   }

   for (let i = 2; i < number; i++) {
       if (number % i === 0) {
           return false;
       }
   }
   return true;
}



console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false