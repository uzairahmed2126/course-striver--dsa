let rows = 5;
let columns = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += String.fromCharCode(65 + i - 1);
  }
  if (i !== rows) {
    pattern += "\n";
  }
}
console.log(pattern);
