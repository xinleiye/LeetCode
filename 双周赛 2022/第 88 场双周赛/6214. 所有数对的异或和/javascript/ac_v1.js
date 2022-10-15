/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let xorSum1 = 0;
    let xorSum2 = 0;

    if (nums1.length % 2) {
        for (const n of nums2) {
            xorSum2 ^= n;
        }
    }
    if (nums2.length % 2) {
        for (const n of nums1) {
            xorSum1 ^= n;
        }
    }

    return xorSum1 ^ xorSum2;
};
