let rows = 5;
let pattern = "";
for (let i = rows; i >= 1; i--) {
  pattern += String.fromCharCode(65 + i - 1);
  for (let j = i; j < rows; j++) {
    pattern += String.fromCharCode(65 + j);
  }
    pattern += "\n";
}
console.log(pattern);
