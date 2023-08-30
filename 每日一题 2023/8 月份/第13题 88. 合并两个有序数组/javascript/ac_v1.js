/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = m - 1; i >= 0; i--) {
        nums1[n + i] = nums1[i];
    }

    let i1 = n;
    let i2 = 0;
    let pos = 0;
    while (i2 < n) {
        if (i1 < (m + n) && nums1[i1] < nums2[i2]) {
            nums1[pos] = nums1[i1];
            i1++;
        } else {
            nums1[pos] = nums2[i2];
            i2++;
        }
        pos++;
    }
};
