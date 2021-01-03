/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    let length1 = nums1.length;
    let length2 = nums2.length;
    // dotProduct[i][j]：位置nums1[i]与nums2[j]处，点积的最大值
    let dotProduct = new Array(length1).fill(0);

    for (let i = 0; i < length1; i++) {
        dotProduct[i] = new Array(length2).fill(0);
    }

    // 当到达nums1[i]与nums2[j]位置时，
    // 只选nums1[i]与nums2[j]：nums1[i] * nums2[j]
    // 选择nums1[i]与nums2[j]：nums1[i] * nums2[j] + dotProduct[i - 1][j - 1]
    // 两者都不选：dotProduct[i - 1][j - 1]
    // 选择nums1[i]：dotProduct[i][j - 1]
    // 选择nums2[j]：dotProduct[i - 1][j]
    // 以上五者取最大
    dotProduct[0][0] = nums1[0] * nums2[0];
    for (let i = 1; i < length1; i++) {
        dotProduct[i][0] = Math.max(nums1[i] * nums2[0], dotProduct[i - 1][0]); 
    }
    for (let i = 1; i < length2; i++) {
        dotProduct[0][i] = Math.max(nums1[0] * nums2[i], dotProduct[0][i - 1]);
    }
    for (let i = 1; i < length1; i++) {
        for (let j = 1; j < length2; j++) {
            dotProduct[i][j] = Math.max(nums1[i] * nums2[j], dotProduct[i - 1][j - 1], dotProduct[i - 1][j - 1] + nums1[i] * nums2[j], dotProduct[i][j - 1], dotProduct[i - 1][j]);
        }
    }

    return dotProduct[length1 - 1][length2 - 1];
};
