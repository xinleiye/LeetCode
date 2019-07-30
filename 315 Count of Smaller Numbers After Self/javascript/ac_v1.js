/**
 * @param {number[]} nums
 * @return {number[]}
 * @Runtime 680 ms, faster than 25.58% of JavaScript online submissions for Count of Smaller Numbers After Self.
 * @Memory_Usage 37.5 MB, less than 90.63% of JavaScript online submissions for Count of Smaller Numbers After Self.
 */
var countSmaller = function(nums) {
    let count;
    let len = nums.length;
    let res = [];

    for (let i = 0; i < len; i++ ) {
        count = 0;
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        res.push(count);
    }

    return res;
};
