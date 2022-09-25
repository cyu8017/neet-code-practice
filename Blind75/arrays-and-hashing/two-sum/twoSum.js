/**
 * Two Sum
 * Level: Easy
 * Directions:
 * - Given an array of integers `nums` and an interger `target`
 * - return the indicies of the two numbers that they add up to `target`.
 * - You may assume that each input would have exactly one solution, 
 * - and you may not use the same element twice.
 * - You can return the answer in any order.
 */

/**
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  } 
}