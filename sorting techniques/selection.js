let arr = [10, 3, 2, 89, 20, 1];
let n = arr.length;
for (let i = 0; i < n; i++) {
  let minIndex = i;
  for (let j = i; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
console.log(arr);
