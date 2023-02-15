/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    const total = nums.length;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < total; i++) {
        if (i % 2) {
            oddSum += nums[i];
        } else {
            evenSum += nums[i];
        }
    }

    let res = 0;
    let preOddSum = 0;
    let preEvenSum = 0;
    for (let i = 0; i < total; i++) {
        let curOddSum = 0;
        let curEvenSum = 0;

        if (i % 2) {
            curOddSum = preOddSum + evenSum - preEvenSum;
            curEvenSum = preEvenSum + oddSum - preOddSum - nums[i];
            preOddSum += nums[i];
        } else {
            curOddSum = preOddSum + evenSum - preEvenSum - nums[i];
            curEvenSum = preEvenSum + oddSum - preOddSum;
            preEvenSum += nums[i];
        }
        if (curOddSum === curEvenSum) {
            res++;
        }
    }

    return res;
};
