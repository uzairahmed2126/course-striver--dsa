function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result += "*";
    }
    for (let j = 1; j < i; j++) {
      result += "  ";
    }
    for (let j = i; j <= n; j++) {
      result += "*";
    }
    if (i !== n) result += "\n";
  }
  result += "\n";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    for (let j = i+1; j <= n; j++) {
      result += "  ";
    }
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(6));
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
