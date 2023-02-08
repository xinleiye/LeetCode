/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let index1 = 0;
    let index2 = 0;

    if ((nums1[len1 - 1] < nums2[0]) || (nums1[0] > nums2[len2 - 1])) {
        return -1;
    }
    while (index1 < len1 && index2 < len2) {
        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            index2++;
        } else {
            return nums1[index1];
        }
    }

    return -1;
};
