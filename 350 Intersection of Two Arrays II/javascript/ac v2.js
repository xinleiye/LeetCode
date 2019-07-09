/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @Runtime 60 ms, faster than 79.95% of JavaScript online submissions for Intersection of Two Arrays II.
 * @Memory_Usage 33.8 MB, less than 99.47% of JavaScript online submissions for Intersection of Two Arrays II.
 */
var intersect = function(nums1, nums2) {
    let pos;
    let res = [];

    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    
    for (let i = 0, len = nums2.length; i < len; i++) {
        pos = nums1.indexOf(nums2[i]);
        if (pos >= 0) {
            nums1[pos] = NaN;
            res.push(nums2[i]);
        }
    }
    
    return res;
};
