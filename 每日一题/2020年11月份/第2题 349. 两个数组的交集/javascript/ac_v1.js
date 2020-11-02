/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let index1 = 0;
    let index2 = 0;

    nums1.sort((val1, val2) => {
        return val1 - val2;
    });

    nums2.sort((val1, val2) => {
        return val1 - val2;
    });

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] > nums2[index2]) {
            index2++;
        } else if (nums1[index1] < nums2[index2]) {
            index1++;
        } else {
            res.push(nums1[index1]);
            index1++;
            index2++;
            while (index1 && (index1 < nums1.length) && (nums1[index1] === nums1[index1 - 1])) {
                index1++;
            }
            while (index2 && (index2 < nums2.length) && (nums2[index2] === nums2[index2 - 1])) {
                index2++;
            }
        }
    }

    return res;
};
