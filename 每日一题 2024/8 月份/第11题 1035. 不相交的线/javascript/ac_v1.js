/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const length1 = nums1.length;
    const length2 = nums2.length;
    const memo = new Array(length1 + 1).fill(0).map(_ => new Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1] + 1;
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
            }
        }
    }

    return memo[length1][length2];
};
