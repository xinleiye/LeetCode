/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let index1 = 0;
    const total1 = nums1.length;
    const total2 = nums2.length;
    let res = 0;

    for (let i = 0; i < total2; i++) {
        while (index1 < total1 && nums1[index1] > nums2[i]) {
            index1++;
        }
        if (index1 < total1) {
            res = Math.max(res, i - index1);
        }
    }

    return res;
};
