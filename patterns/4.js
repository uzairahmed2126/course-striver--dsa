// let rows = 5;
// let columns = 5;
// let pattern = "";

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += i;
//   }
//   pattern += "\n";
// }
// console.log(pattern);

let patternSize = 5;
let pattern = "";
function patternFunction(result, n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(patternFunction(pattern, patternSize));