/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    const res = [0, 0];

    for (const n of nums1) {
        if (nums2Set.has(n)) {
            res[0]++;
        }
    }
    for (const n of nums2) {
        if (nums1Set.has(n)) {
            res[1]++;
        }
    }

    return res;
};
