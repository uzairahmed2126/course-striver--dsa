function pattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      result += String.fromCharCode(64 + n - j + 1) + " ";
      //   64+6-1+1=70-F
      //   64+6-2+1=69-E
      //   64+6-3+1=68-D
      //   64+6-4+1=67-C
      //   64+6-5+1=66-B
      //   64+6-6+1=65-A
    }
    if (i !== n) result += "\n";
  }
  return result;
}
console.log(pattern(6));
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F
