let rows = 5;
let columns = 9;
let pattern = "";
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < i; j++) {
    pattern += " ";
  }
}
console.log(pattern);
