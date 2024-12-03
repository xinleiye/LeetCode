/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    nums.sort((n1, n2) => n1 - n2);

    const total = nums.length;
    const half = total >>> 1;
    let left = 0;
    let right = total >>> 1;
    let res = 0;
    while (left < half && right < total) {
        while (right < total && nums[left] * 2 > nums[right]) {
            right++;
        }
        if (right < total) {
            res += 2;
            right++;
        }
        left++;
    }

    return res;
};
