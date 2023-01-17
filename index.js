//FizzBuzz Exercise
//Code uses a loop to iterate through numbers 1-100. For each number, it runs a check to see
//if the number is divisible by 3, 5, or both using the modulo operator. If the number is divisible by 3, it logs 'Fizz'.
//If the number is divisible by 5, it logs 'Buzz'. If the number is divisible by both 3 and 5, it logs 'FizzBuzz'.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 
    && i % 5 === 0) {
    console.log('FizzBuzz');
}
  else if (i % 3 === 0) {
    console.log('Fizz');
} else if (i % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(i);
}
}

// This version reduces the amount of code needed for the same result. It removes the need for 
// the if/else statements and replaces them with a single if statement. The if statement checks
// if the number is divisible by 3, 5, or both. If the number is divisible by 3, it logs 'Fizz'.
// If the number is divisible by 5, it logs 'Buzz'. If the number is divisible by both 3 and 5, it logs 'FizzBuzz'.
// If the number is not divisible by 3 or 5, it logs the number.
// Otherwise it checks if the output variable is false, and if it is, it logs the output variable.

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 15 === 0) output += "fizzbuzz";
  if (i % 3 === 0) output += "fizz";
  if (i % 5 === 0) output += "buzz";
  if (i % 7 === 0) output += "foo";
  console.log(output || i);
}
