function pattern(n) {
  let result = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      result += String.fromCharCode(65 + j) + " ";
    }
    if (i !== 1) result += "\n";
  }
  return result;
}
console.log(pattern(6));
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A
