let arr = [10, 23, 2, 234, 1];
let n = arr.length;
for (let i = 0; i < n-1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
}
console.log(arr);
