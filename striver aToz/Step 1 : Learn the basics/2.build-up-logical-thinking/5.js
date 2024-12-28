function pattern(n, star) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      result += star;
    }
    if (i !== n) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5, "*"));
