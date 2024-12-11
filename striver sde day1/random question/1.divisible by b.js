// next number greater than a and b and divisible by b you are given two numbers a and b create a function that returns the next number greater than a and b and divisible by b
function divisible_by_b(a, b) {
  //   const remainder = a % b;
  //   return a + b - remainder;
    return a + (b - (a % b));
}
console.log(divisible_by_b(17, 8)); //24
console.log(divisible_by_b(98, 3)); //99
console.log(divisible_by_b(14, 11)); //22
// notes a will always be greater than b.
