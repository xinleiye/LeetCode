/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const total1 = nums1.length;
    const total2 = nums2.length;
    let index1 = 0;
    let index2 = 0;
    const res = [];

    nums1.sort((n1, n2) => n1 - n2);
    nums2.sort((n1, n2) => n1 - n2);
    while (index1 < total1 && index2 < total2) {
        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            index2++;
        } else {
            res.push(nums1[index1]);
            index1++;
            index2++;
        }
    }

    return res;
};
