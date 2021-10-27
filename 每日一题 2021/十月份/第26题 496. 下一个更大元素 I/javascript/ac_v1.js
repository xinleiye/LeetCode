/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const res = new Array(nums1.length).fill(0);

    nums1.forEach((num, index) => {
        let target = -1;
        let pos = nums2.length - 1;

        while (pos >= 0 && nums2[pos] !== num) {
            if (nums2[pos] > num) {
                target = nums2[pos];
            }
            pos--;
        }
        res[index] = target;
    });

    return res;
};
