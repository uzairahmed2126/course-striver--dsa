function merge(list1, list2) {
  let i = 0,
    j = 0;
  let n = list1.length;
  let m = list2.length;
  let left = n - 1,
    right = 0;
  let result = [];
  //   this is corrected virson
  while (i < n && j < m) {
    if (list1[i] <= list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }
  while (i < n) {
    result.push(list1[i]);
    i++;
  }
  while (j < m) {
    result.push(list2[j]);
    j++;
  }
  return result;

  //   it is my code
  //   while (left >= right) {
  //     if (list1[left] >= list2[right]) {
  //       [list1[left], list2[right]] = [list2[right], list1[left]];
  //     }
  //     left--;
  //     right++;
  //   }
  //   while (i <= n && j <= m) {
  //     if (list1[i] >= list1[i + 1]) {
  //       [list1[i], list1[i + 1]] = [list1[i + 1], list1[i]];
  //     }
  //     if (list2[j] >= list2[j + 1]) {
  //       [list2[j], list2[j + 1]] = [list2[j + 1], list2[j]];
  //     }
  //     i++;
  //     j++;
  //   }
  //   for (let i = 0; i < m; i++) {
  //     list1.push(list2[i]);
  //   }
  //   return list1;
}
console.log(merge([1, 2, 4], [1, 3, 4, 5])); //Output: [1,1,2,3,4,4]
