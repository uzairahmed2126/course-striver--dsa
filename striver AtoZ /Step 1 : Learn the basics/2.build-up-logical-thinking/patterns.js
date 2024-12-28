// function pattern(n, star) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += star;
//     }
//     if (i !== star) {
//       result += "\n";
//     }
//   }
//   return result;
// }
// console.log(pattern(5, "*"));

function pattern(n, star) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += star;
    }
    if (i !== star) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5, "*"));
