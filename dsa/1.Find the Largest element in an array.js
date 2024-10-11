// Example 1:
// Input:

// Output:
//  5
// Explanation:
//  5 is the largest element in the array.

// Example2:
// Input:
// 1.
// function findLargest(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr[arr.length - 1];
// }

// 2.
function findLargest(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
}
console.log(findLargest([8, 10, 5, 7, 9]));
console.log(findLargest([2, 5, 1, 3, 0]));
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.
