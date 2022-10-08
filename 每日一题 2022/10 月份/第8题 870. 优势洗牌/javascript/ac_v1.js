/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const total = nums1.length;
    const index2 = new Array(total);
    for (let i = 0; i < total; i++) {
        index2[i] = i;
    }
    nums1.sort((n1, n2) => n1 - n2);
    index2.sort((i1, i2) => nums2[i1] - nums2[i2]);

    let left = 0;
    let right = total - 1;
    const res = new Array(total);
    for (let i = 0; i < total; i++) {
        if (nums1[i] > nums2[index2[left]]) {
            res[index2[left]] = nums1[i];
            left++;
        } else {
            res[index2[right]] = nums1[i];
            right--;
        }
    }

    return res;
};
