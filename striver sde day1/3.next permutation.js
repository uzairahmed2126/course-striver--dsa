// function nextPermutation(arr) {
//   let n = arr.length;
//   let ind = -1;
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       ind = i;
//       break;
//       // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
//   }
//   if (ind === -1) {
//     return arr.reverse();
//     // for (let i = 0; i < n; i++) {
//     //   for (let j = 0; j < n - 1; j++) {
//     //     if (arr[j] > arr[j + 1]) {
//     //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     //     }
//     //   }
//     // }
//   }
//   for (let i = n - 1; i > ind; i--) {
//     if (arr[i] > arr[ind]) {
//       arr[i] = arr[ind];
//       break;
//     }
//   }
//   arr.reverse();
//   return arr;
// }

function nextPermutation(arr) {
  let n = arr.length;
  let ind = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }
  if (ind === -1) {
    return arr.reverse();
  }
  for (let i = n - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      [arr[ind], arr[i]] = [arr[i], arr[ind]];
      break;
    }
  }
  let left = ind + 1;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(nextPermutation([1, 2, 3])); //[1,3,2]
console.log(nextPermutation([3, 2, 1])); //[1,2,3]
console.log(nextPermutation([1, 1, 5])); //[1,5,1]
console.log(nextPermutation([1, 3, 2])); //[2,1,3]
