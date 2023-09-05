/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((n1, n2) => n1 - n2);
    nums2.sort((n1, n2) => n1 - n2);
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            if (n2 === n1) {
                return n1;
            }
        }
    }

    return Math.min(nums1[0], nums2[0]) * 10 + Math.max(nums1[0], nums2[0])
};
