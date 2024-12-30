function pattern(rows, cols) {
  let result = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = i; j < rows; j++) {
      result += "-";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      result += "*";
    }
    if (i !== rows) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(6, 11, "*"));
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
