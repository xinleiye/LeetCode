/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
    const arr1 = [];
    const arr2 = [];
    
    for (const n of nums1) {
        set1.add(n);
    }
    for (const n of nums2) {
        if (!set2.has(n)) {
            if (!set1.has(n)) {
                arr2.push(n);
            }
            set2.add(n);
        }
    }
    set1.forEach(n => {
        if (!set2.has(n)) {
            arr1.push(n);
        }
    })
    
    return [arr1, arr2];
};
