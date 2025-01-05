function pattern(n) {
  let result = "";
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    for (let k = 1; k <= space; k++) {
      result += "-";
    }
    for (let e = i; e >= 1; e--) {
      result += e;
    }
    if (i !== n) result += "\n";
    space -= 2;
  }
  return result;
}
console.log(pattern(3));
console.log(pattern(6));
// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321
