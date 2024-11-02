let rows = 5 + 65;
let columns = 5;
let pattern = "";
for (let i = 65; i < rows; i++) {
  for (let j = 65; j <= i; j++) {
    pattern += String.fromCharCode(j);
  }
  if (i !== rows-1) {
    pattern += "\n";
  }
}
console.log(pattern);
