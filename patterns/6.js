let rows = 5;
let columns = 5;
let pattern = "";
for (let i = 0; i < rows; i++) {
  for (let j = 1; j <= columns - i; j++) {
    pattern += j;
  }
  pattern += "\n";
}
console.log(pattern);
