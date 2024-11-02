let rows = 5;
let columns = 15;
let pattern = "";
let count = 0;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    count++;
    pattern += count + " ";
  }
  if (i !== rows) {
    pattern += "\n";
  }
}
console.log(pattern);
