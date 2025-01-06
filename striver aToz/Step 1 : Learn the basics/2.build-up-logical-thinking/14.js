function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += String.fromCharCode(64 + j);
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(3));
console.log(pattern(6));
// A
// AB
// ABC
// ABCD
// ABCDE
// ABCDEF
