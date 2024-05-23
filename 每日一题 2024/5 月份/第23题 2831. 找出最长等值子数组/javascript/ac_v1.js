/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    const total = nums.length;
    const posMap = new Map();
    for (let i = 0; i < total; i++) {
        if (!posMap.has(nums[i])) {
            posMap.set(nums[i], []);
        }
        posMap.get(nums[i]).push(i);
    }

    let res = 0;
    for (const arr of posMap.values()) {
        const length = arr.length;
        let left = 0;
        let right = 0;
        while (right < length) {
            while (arr[right] - arr[left] - (right - left) > k) {
                left++;
            }
            res = Math.max(res, right - left + 1);
            right++;
        }
    }

    return res;
};
