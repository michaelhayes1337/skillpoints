nums = [1, 2, 3, 5];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const history = {};
  for (let i = 0; i < nums.length; i++) {
    if (history[nums[i]]) {
      return true;
    } else {
      history[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
