let rows = 5;
let columns = 5;
let pattern = "";

for (let i = 0; i < rows; i++) {
  pattern += "\n";
  for (let j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "*";
}
console.log(pattern);
