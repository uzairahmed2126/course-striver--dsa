// function pattern(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i === 1) result += "*";
//       if (i === n) result += "*";
//       if (j === 1 && i !== 1 && i !== n) result += "*";
//       if (j === n && i !== 1 && i !== n) result += "*";
//       else {
//         if (i !== 1 && j !== 1 && i !== n) {
//           result += " ";
//         }
//       }
//     }
//     if (i !== n) result += "\n";
//   }
//   return result;
// }
function pattern(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        result += "*";
      } else result += " ";
    }
    if (i !== n - 1) result += "\n";
  }
  return result;
}
console.log(pattern(6));
// ******
// *    *
// *    *
// *    *
// *    *
// ******
