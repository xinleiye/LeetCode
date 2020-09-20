/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let mask = 1 << nums.length;

    for (let i = 0; i < mask; i++) {
        let sub = [];

        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                sub.push(nums[j]);
            }
        }
        res.push(sub);
    }

    return res;
};
