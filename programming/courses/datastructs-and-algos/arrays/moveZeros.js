const nums = [0, 1, 0, 3, 12];
const shiftLeft = (nums, idx) => {
  for (let i = idx; i < nums.length; i++) {
    nums[i] = nums[i + 1];
  }
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      shiftLeft(nums, i);
      nums[nums.length - 1] = 0;
    }
  }
};

moveZeroes(nums);
console.log(nums);
