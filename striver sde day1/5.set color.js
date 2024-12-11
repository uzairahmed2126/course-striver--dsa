let nums = [2, 0, 2, 1, 1, 0]; //[0,0,1,1,2,2];
function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
  }
  return nums;
}
console.log(sort(nums));
