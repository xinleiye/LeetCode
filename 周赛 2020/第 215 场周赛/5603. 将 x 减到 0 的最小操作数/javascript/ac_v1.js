/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let res = Number.MAX_SAFE_INTEGER;
    let sumStart = new Array(nums.length + 1);
    let sumEnd = new Array(nums.length + 1);

    sumStart[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        sumStart[i + 1] = nums[i] + sumStart[i];
    }
    
    sumEnd[nums.length] = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        sumEnd[i] = nums[i] + sumEnd[i + 1];
    }

    for (let i = 0; i < sumStart.length; i++) {
        let left = i;
        let right = sumEnd.length - 1;
        let target = x - sumStart[i];

        if (target < 0) {
            break;
        } else if (target === 0) {
            res = Math.min(res, i);
            break;
        }
        // 二分查找
        while (left <= right) {
            let mid = (left + right) >>> 1;

            if (sumEnd[mid] > target) {
                left = mid + 1;
            } else if (sumEnd[mid] < target) {
                right = mid - 1;
            } else {
                res = Math.min(res, i + nums.length - mid);
                break;
            }
        }
    }
    
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};
