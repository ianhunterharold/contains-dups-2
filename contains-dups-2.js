/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // create an object with the elements and indices as their vaue
       const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};
//better than 95.86% of other javascript users (at the time of publication)

//  "Find 2 numbers in the array that are equal and are at most k apart from each other."?


