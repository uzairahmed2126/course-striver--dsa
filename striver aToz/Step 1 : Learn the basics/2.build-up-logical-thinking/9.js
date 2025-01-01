// function pattern(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j < n; j++) {
//       result += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       result += "*";
//     }
//     if (i !== n) result += "\n";
//   }
//   result += "\n";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j < i; j++) {
//       result += " ";
//     }
//     for (let k = i - 1; k < n; k++) {
//       result += "*";
//     }
//     for (let k = i; k < n; k++) {
//       result += "*";
//     }
//     if (i !== n) result += "\n";
//   }
//   return result;
// }

function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }
    for (let k = 1; k < 2 * i; k++) {
      result += "*";
    }
    if (i !== n) result += "\n";
  }
  result += "\n";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      result += " ";
    }
    for (let k = i - 1; k < n * 2 - i; k++) {
      result += "*";
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(6));
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
