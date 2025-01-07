function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += String.fromCharCode(64 + i)+" ";
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(6));
// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F
