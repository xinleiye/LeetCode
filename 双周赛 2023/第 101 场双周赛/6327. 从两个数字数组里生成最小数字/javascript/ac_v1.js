/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((n1, n2) => n1 - n2);

    const num2Set = new Set(nums2);
    for (const n of nums1) {
        if (num2Set.has(n)) {
            return n;
        }
    }

    const getMin = (arr) => {
        let min = 9;

        for (const n of arr) {
            min = Math.min(min, n);
        }

        return min;
    };
    let min1 = nums1[0];
    let min2 = getMin(nums2);
    if (min1 !== min2) {
        return Math.min(min1, min2) * 10 + Math.max(min1, min2);
    } else {
        return min1;
    }
};
