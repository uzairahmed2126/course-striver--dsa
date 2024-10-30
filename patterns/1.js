let rows = 5;
let columns = 5;
let pattern = "";
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
