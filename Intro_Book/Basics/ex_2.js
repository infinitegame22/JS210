let number = 4936;

ones_place = number % 10
number -= ones_place
number /= 10

tens_place = number % 10
number -= tens_place
number /= 10

hundreds_place = number % 10
number -= hundreds_place
number /= 10

thousands_place = number % 10

console.log(`The thousands place is ${thousands_place}.  The hundreds place is ${hundreds_place}. 
                The tens place is ${tens_place}. The ones place is ${ones_place}.`)