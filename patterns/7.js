let rows = 5;
let columns = 9;
let pattern = "";
for (let i = 1; i <=rows; i++) {
  for(let j = i;j<=rows;j++) {
    pattern+=" "
  }
  for(let k = 1;k<=2*i-1;k++) {
    pattern+="*"
  }
  pattern+='\n'
}
console.log(pattern);
