function pattern(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result += j;
    }
    if (i !== n) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5));
