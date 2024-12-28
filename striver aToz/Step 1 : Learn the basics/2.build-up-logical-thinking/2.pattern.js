function pattern(n, star) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      result += star;
    }
    if (i !== star) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5, "*"));
