function maxSubArray(nums) {
  let sum = 0;
  let arr = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = nums[i];
    if (sum < max) {
      sum = max;
    }
    arr.push(sum);
  }
  return Math.max(...arr);
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
