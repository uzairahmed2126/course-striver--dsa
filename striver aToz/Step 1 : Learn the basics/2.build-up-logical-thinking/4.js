function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += i;
    }
    if (i !== n) {
      result += "\n";
    }
  }
  return result;
}
console.log(pattern(5));
let s = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    s += i * j + " ";
  }
  if (i !== 10) {
    s += "\n";
  }
}
console.log(s);

let a = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 0; j < 10; j++) {
    a += i;
  }
  if (i !== 10) {
    a += "\n";
  }
}
console.log(a);
