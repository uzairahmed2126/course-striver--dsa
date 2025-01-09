function pattern(n) {
  let result = "";
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      result += "*";
    }
    for (let j = 1; j <= spaces; j++) {
      result += " ";
    }
    for (let j = 1; j <= stars; j++) {
      result += "*";
    }
    if (i !== n * n) result += "\n";
    if (i < n) spaces -= 2;
    else spaces += 2;
  }
  return result;
}
console.log(pattern(6));
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
