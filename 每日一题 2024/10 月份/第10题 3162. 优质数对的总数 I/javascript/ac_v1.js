/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let res = 0;

    for (const n of nums1) {
        for (const m of nums2) {
            if (n % (m * k) === 0) {
                res++;
            }
        }
    }

    return res;
};
