function pattern(n) {
  let result = "";
  let stars = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) stars = 1;
    else stars = 0;
    for (let j = 1; j <= i; j++) {
      result += stars;
      stars = 1 - stars;
    }
    result += "\n";
  }
  return result;
}
console.log(pattern(6));

// // 1
// // 01
// // 101
// // 0101
// // 10101
// // 010101
