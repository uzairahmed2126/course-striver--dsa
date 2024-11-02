let rows = 4;
let columns = 8;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += j;
  }
  for (let e = rows; e > i; e--) {
    pattern += "  ";
  }
  for (let k = i; k >= 1; k--) {
    pattern += k;
  }
  if (i !== rows) {
    pattern += "\n";
  }
}
console.log(pattern);
