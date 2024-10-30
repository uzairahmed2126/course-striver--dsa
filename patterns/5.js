let rows = 5;
let columns = 5;
let pattern = "";

for (let i = 0; i < rows; i++) {
  pattern += "*";
  for (let j = columns-1; j > i; j--) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
