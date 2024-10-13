// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output
// : True.
// Explanation:
//  The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

function isSorted(arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > num) {
        result = true;
      } else {
        return result;
      }
    }
  }
  return result;
}
// 2
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); //true
console.log(isSorted([5, 4, 6, 7, 8])); //false
