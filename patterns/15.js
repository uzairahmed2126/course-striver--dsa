let rows = 5;
let columns = 5;
for (let i = rows; i >= 1; i--) {
  let pattern = "";
  for (let j = 0; j < i; j++) {
    pattern += String.fromCharCode(65 + j);
  }
  console.log(pattern);
}
