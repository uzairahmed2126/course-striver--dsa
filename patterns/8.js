let rows = 5;
let columns = 9;
let pattern = "";
for (let i = 0; i < rows; i++) {
  for (let e = 0; e < i; e++) {
    pattern += " ";
  }
  for (let j = i; j < columns - i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
