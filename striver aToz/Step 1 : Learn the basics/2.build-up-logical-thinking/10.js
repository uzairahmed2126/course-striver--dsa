function pattern(n) {
  let result = "";
  for (let i = 0; i <= 2 * n - 1; i++) {
    let stars = i;
    if (stars > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      result += "*";
    }
    if (i !== n || i !== 2 * n - 1) {
      result += "\n";
    }
  }
  //   result += "\n";
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n - i; j++) {
  //       result += "*";
  //     }
  //     if (i !== n - 1) {
  //       result += "\n";
  //     }
  //   }
  return result;
}
console.log(pattern(6));
//      *
//      **
//      ***
//      ****
//      *****
//      ******
//      *****
//      ****
//      ***
//      **
//      *
