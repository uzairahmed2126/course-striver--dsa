function pattern(n) {
  let result = "";
  let space = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result += "*";
    }
    for (let j = 1; j <= space; j++) {
      result += " ";
    }
    for (let j = i; j <= n; j++) {
      result += "*";
    }
    space += 2;
    if (i !== n) result += "\n";
  }
  result += "\n";
  space = 2 * n - 2;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    for (let j = 1; j <= space; j++) {
      result += " ";
    }
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    space -= 2;
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
