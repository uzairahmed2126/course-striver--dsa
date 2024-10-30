let rows = 5;
let columns = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  pattern += "\n";
  for (let j = 1; j < i; j++) {
    pattern += j;
  }
  pattern += i;
}
console.log(pattern);
