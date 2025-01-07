function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
      result += " ";
    }
    for (let j = 1; j <= i; j++) {
      result += String.fromCharCode(64 + j);
    }
    for (let j = i; j >= 2; j--) {
      result += String.fromCharCode(63 + j);
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(6));
//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA
// ABCDEFEDCBA
