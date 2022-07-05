/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
    const calcMaxScore = (arr1, arr2) => {
        const total = arr1.length;
        let sum = 0;
        let diffSum = 0;
        let maxDiffSum = 0;

        for (let i = 0; i < total; i++) {
            sum += arr1[i];
            diffSum = Math.max(diffSum + arr2[i] - arr1[i], 0);
            maxDiffSum = Math.max(maxDiffSum, diffSum);
        }

        return sum + maxDiffSum;
    };

    return Math.max(calcMaxScore(nums1, nums2), calcMaxScore(nums2, nums1));
};
