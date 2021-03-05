/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
    let res = 0;
    let diff;
    const sum1 = calcArrSum(nums1);
    const sum2 = calcArrSum(nums2);
    const freq = new Array(6).fill(0);

    if (sum1 === sum2) {
        return 0;
    }
    if (sum1 < sum2) {
        const tmpNums = nums1;

        nums1 = nums2;
        nums2 = tmpNums;
    }

    nums1.forEach(val => {
        freq[val - 1]++;
    });
    nums2.forEach(val => {
        freq[6- val]++;
    });

    diff = Math.abs(sum1 - sum2);
    for (let i = 5; i > 0; i--) {
        while (freq[i] > 0 && diff > 0) {
            freq[i]--;
            diff -= i;
            res++;
        }
        if (diff < 0) {
            break;
        }
    }

    return diff > 0 ? -1 : res;
};

function calcArrSum (arr) {
    return arr.reduce((preVal, currentVal) => {
        return preVal + currentVal;
    });
}
