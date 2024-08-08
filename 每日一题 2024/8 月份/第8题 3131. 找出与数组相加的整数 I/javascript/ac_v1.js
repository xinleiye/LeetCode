/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let max1 = 0;
    let max2 = 0;

    for (const n of nums1) {
        max1 = Math.max(max1, n);
    }
    for (const n of nums2) {
        max2 = Math.max(max2, n);
    }

    return max2 - max1;
};
