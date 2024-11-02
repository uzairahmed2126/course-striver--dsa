let rows = 5;
let columns = 9;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = i; j <= rows + 1; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
for (let i = 1; i <= rows; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += " ";
  }
  for (let k = i; k <= rows; k++) {
    pattern += "*";
  }
  for (let e = i; e < rows; e++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
