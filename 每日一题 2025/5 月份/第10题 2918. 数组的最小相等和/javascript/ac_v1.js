/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    const [s1, c1] = getSum(nums1);
    const [s2, c2] = getSum(nums2);

    if (s1 + c1 > s2 + c2) {
        if (c2 > 0) {
            return s1 + c1;
        }
    } else if (s1 + c1 < s2 + c2) {
        if (c1 > 0) {
            return s2 + c2;
        }
    } else {
        return s1 + c1;
    }

    return -1;
};

function getSum(arr) {
    let sum = 0;
    let count = 0;

    for (const n of arr) {
        sum += n;
        if (n === 0) {
            count++;
        }
    }

    return [sum, count];
}
