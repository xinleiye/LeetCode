/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
    const total = nums1.length;
    if (k === 0) {
        for (let i = 0; i < total; i++) {
            if (nums1[i] !== nums2[i]) {
                return -1;
            }
        }
        return 0;
    }

    let count = 0;
    let ops = 0;
    for (let i = 0; i < total; i++) {
        const diff = nums1[i] - nums2[i];

        if (diff % k) {
            return -1;
        }
        ops += diff / k;
        count += Math.abs(diff / k);
    }
    return ops === 0 ? count / 2 : -1;
};
