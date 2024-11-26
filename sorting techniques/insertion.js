let arr = [10, 23, 2, 234, 1];
let n = arr.length;
for (let i = 1; i < n; i++) {
  let current = arr[i]; //1,2,3,4
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}
console.log(arr);
