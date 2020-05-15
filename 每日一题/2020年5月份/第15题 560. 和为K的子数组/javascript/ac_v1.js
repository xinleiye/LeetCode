/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0;
    let sum = 0;
    let sumMap = new Map();

    sumMap.set(0, 1);
    nums.forEach((num) => {
        sum += num;
        if (sumMap.has(sum - k)) {
            res += sumMap.get(sum - k);
        }
        if (sumMap.has(sum)) {
            sumMap.set(sum, sumMap.get(sum) + 1);
        } else {
            sumMap.set(sum, 1);
        }
    });

    return res;
};
