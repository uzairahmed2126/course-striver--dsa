let rows = 5;
let pattern1 = "";
let pattern2 = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern1 += "*";
  }
  for (let k = i; k < rows; k++) {
    pattern1 += "  ";
  }
  for (let e = 1; e <= i; e++) {
    pattern1 += "*";
  }
  if (i !== rows) {
    pattern1 += "\n";
  }
}
for (let i = 1; i < rows; i++) {
  for (let j = i; j < rows; j++) {
    pattern2 += "*";
  }
  for (let k = 1; k <= i; k++) {
    pattern2 += "  ";
  }
  for (let e = i; e < rows; e++) {
    pattern2 += "*";
  }
  if (i !== rows - 1) {
    pattern2 += "\n";
  }
}
console.log(pattern1);
console.log(pattern2);
