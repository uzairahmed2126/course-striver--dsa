function findDuplicate(nums) {
  //   let seen = new Set();
  //   for (const num of nums) {
  //     if (seen.has(num)) {
  //       return num;
  //     }
  //     seen.add(num);
  //   }
  //   return seen;

  //   let result = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < i; j++) {
  //       if (nums[i] === nums[j]) {
  //         result = nums[j];
  //         break;
  //       }
  //     }
  //   }
  //   return result;

  //   let result = 0;
  //   let i = 0,
  //     j = 0;
  //   while (i < nums.length) {
  //     if (j < i) {
  //       if (nums[i] === nums[j]) {
  //         result = nums[j];
  //         break;
  //       }
  //       j++;
  //     } else {
  //       i++;
  //       j = 0;
  //     }
  //   }

  //   return result;

  //   let i = 0;
  //   let j = 1;
  //   let result = 0;
  //   while (i < nums.length && j < nums.length) {
  //     // if (nums[i] !== nums[j]) {
  //     //   //   result = nums[j];
  //     //   continue;
  //     // }
  //     // result = nums[j];
  //     // i++;
  //     // j++;
  //   }
  //   return result;

  //   for (let i = 0; i < nums.length; i++) {
  //     let idx = Math.abs(nums[i]) - 1;
  //     if (nums[idx] < 0) {
  //       return Math.abs(nums[i]);
  //     }
  //     nums[idx] = -nums[idx];
  //   }
  //   return -1;
  let left = 1,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let num of nums) {
      if (num <= mid) count++;
    }
    if (count > mid) right = mid;
    else left = mid + 1;
  }
  return left;
}
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([2, 2, 2, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([5, 1, 3, 3, 2]));
console.log(findDuplicate([5, 1, 3, 3, 5, 2]));
