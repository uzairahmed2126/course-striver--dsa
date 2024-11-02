let rows = 4;
let columns = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = i; j <= rows; j++) {
    pattern += " ";
  }
  for (let k = 1; k <= i; k++) {
    pattern += String.fromCharCode(65 + k - 1);
  }
  for (let k = i; k > 1; k--) {
    pattern += String.fromCharCode(65 + k - 2);
  }
  if (i !== rows) {
    pattern += "\n";
  }
}
console.log(pattern);
