/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    let nums1Map = new Map();
    let nums2Map = new Map();

    nums1.forEach(val => {
        if (nums1Map.has(val)) {
            nums1Map.set(val, nums1Map.get(val) + 1);
        } else {
            nums1Map.set(val, 1);
        }
    });
    nums2.forEach(val => {
        if (nums2Map.has(val)) {
            nums2Map.set(val, nums2Map.get(val) + 1);
        } else {
            nums2Map.set(val, 1);
        }
    });

    nums1Map.forEach((val, key) => {
        if (nums2Map.has(key)) {
            for (let i = 0, len = Math.min(val, nums2Map.get(key)); i < len; i++) {
                res.push(key);
            }
        }
    });

    return res;
};
