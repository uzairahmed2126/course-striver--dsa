let n = 5;
let pattern = "";
for (let i = 0; i < n; i++) {
  if (i > 0) {
    pattern += "\n";
  }
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "*";
}
console.log(pattern);
