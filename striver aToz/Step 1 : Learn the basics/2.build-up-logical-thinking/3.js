function pattern(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      result += j + 1;
    }
    if (i !== n) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5));
