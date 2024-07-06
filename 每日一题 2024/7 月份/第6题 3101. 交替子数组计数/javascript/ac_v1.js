/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    let res = 0;
    let left = 0;
    let right = 0;
    const total = nums.length;

    while (right < total) {
        while (right + 1 < total && nums[right + 1] !== nums[right]) {
            right++;
        }
        res += calcSum(right - left + 1);
        right++;
        left = right;
    }

    return res;
};

function calcSum(num) {
    return (1 + num) * num / 2;
}
