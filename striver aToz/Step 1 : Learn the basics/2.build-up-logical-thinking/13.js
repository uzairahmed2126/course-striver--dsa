function pattern(n) {
  let result = "";
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      count++;
      result += count + " ";
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(3));
console.log(pattern(6));
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21
