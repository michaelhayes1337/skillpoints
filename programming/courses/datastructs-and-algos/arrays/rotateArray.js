const [nums, k] = [[-1, -100, 3, 99], 2];

const shiftIdx = (index, step, maxIndex) => {
  if (index + step <= maxIndex) return index + step;
  return index + step - maxIndex;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  console.log(nums.length);
  for (let i = 0; i < nums.length - k; i++) {
    const shiftedIdx = shiftIdx(i, k, nums.length - 1);
    console.log({ i, shiftedIdx });
  }
};
rotate(nums, k);
console.log(nums);
