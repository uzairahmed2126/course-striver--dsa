let rows = 5;
let columns = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = i; j >= 1; j--) {
    pattern += j % 2;
  }
  pattern += "\n";
}
console.log(pattern);
