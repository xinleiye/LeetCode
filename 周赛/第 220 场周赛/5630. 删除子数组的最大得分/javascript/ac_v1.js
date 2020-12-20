/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let res = 0;
    let left = 0;
    let right = 0;
    const length = nums.length;
    const numSum = new Array(length + 1);
    let subArr = [];
    
    numSum[0] = 0;
    for (let i = 0; i < length; i++) {
        numSum[i + 1] = nums[i] + numSum[i];
    }

    while (right < length) {
        const index = subArr.indexOf(nums[right]);

        if (index >= 0) {
            res = Math.max(res, numSum[right] - numSum[left]);
            subArr = subArr.splice(index + 1);
            left = left + index + 1;
        }
        subArr.push(nums[right]);
        right++;
    }

    res = Math.max(res, numSum[right] - numSum[left]);

    return res;
};
