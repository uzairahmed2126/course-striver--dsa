let rows = 4;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows; j++) {
    if (i === 1 || j === 1 || i === rows || j === rows) pattern += "*";
    else {
      pattern += " ";
    }
  }
  if(i!==rows) {
      pattern += "\n";
  }
}
console.log(pattern);
