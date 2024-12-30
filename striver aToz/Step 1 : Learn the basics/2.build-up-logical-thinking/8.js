function pattern(rows, star) {
  let result = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }
    for (let k = rows; k > i; k--) {
      result += star;
    }
    for (let e = 1; e < rows - i; e++) {
      result += star;
    }
    if (i !== rows - 1) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(6, "*"));
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
