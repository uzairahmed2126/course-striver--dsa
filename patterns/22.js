let rows = 7;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows; j++) {
    if (i === 1 || j === 1 || i === rows || j === rows) {
      pattern += 4;
    } else if (i === 2 || j === 2 || i === rows - 1 || j === rows - 1) {
      pattern += 3;
    } else if (i === 3 || j === 3 || i === rows - 2 || j === rows - 2) {
      pattern += 2;
    } else {
      pattern += j - i + 1;
    }
  }
  if (i !== rows) pattern += "\n";
}
console.log(pattern);
