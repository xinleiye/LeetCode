/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @Runtime 52 ms, faster than 96.67% of JavaScript online submissions for Intersection of Two Arrays II.
 * @Memory_Usage 36.3 MB, less than 15.09% of JavaScript online submissions for Intersection of Two Arrays II.
 */
var intersect = function(nums1, nums2) {
    let num;
    let nums1Map = new Map();
    let nums2Map = new Map();
    let res = [];
    
    for (let i = 0, len = nums1.length; i < len; i++) {
        num = nums1[i]
        if (nums1Map.has(num)) {
            nums1Map.set(num, nums1Map.get(num) + 1);
        } else {
            nums1Map.set(num, 1);
        }
    }

    for (let i = 0, len = nums2.length; i < len; i++) {
        num = nums2[i]
        if (nums2Map.has(num)) {
            nums2Map.set(num, nums2Map.get(num) + 1);
        } else {
            nums2Map.set(num, 1);
        }
    }
    
    nums1Map.forEach((value, key) => {
        num = Math.min(value, nums2Map.get(key));
        while(num) {
            res.push(key);
            num--;
        }
    });

    return res;
};
