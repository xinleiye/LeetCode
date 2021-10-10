/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const res = new Set();
    const numMap = new Map();
    
    nums1.forEach(val => {
        if (!numMap.has(val)) {
            numMap.set(val, 1);
        }
    });
    nums2.forEach(val => {
        if (numMap.has(val)) {
            if (numMap.get(val) !== 2) {
                res.add(val);
            }
        } else {
            numMap.set(val, 2);
        }
    });
    nums3.forEach(val => {
        if (numMap.has(val)) {
            if (numMap.get(val) !== 3) {
                res.add(val);
            }
        } else {
            numMap.set(val, 3);
        }
    });

    return [...res];
};
