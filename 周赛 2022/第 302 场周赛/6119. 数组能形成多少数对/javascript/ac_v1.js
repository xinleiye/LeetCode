/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairs = 0;
    const total = nums.length;
    let index = 0;

    nums.sort((n1, n2) => n1 - n2);
    while (index < total) {
        while (index < total && nums[index] === nums[index + 1]) {
            pairs++;
            index += 2;
        }
        index++;
    }
    
    return [pairs, total - pairs * 2];
};
