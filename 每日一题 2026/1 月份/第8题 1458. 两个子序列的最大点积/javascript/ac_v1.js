/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const total1 = nums1.length;
    const total2 = nums2.length;
    const dotProduct = Array.from({ length: total1 + 1}, _ => new Array(total2 + 1).fill(-Infinity));

    for(let i = 0; i < total1; i++) {
        for (let j = 0; j < total2; j++) {
            dotProduct[i + 1][j + 1] = Math.max(nums1[i] * nums2[j], dotProduct[i][j] + nums1[i] * nums2[j], dotProduct[i + 1][j], dotProduct[i][j + 1]);
        }
    }

    return dotProduct[total1][total2];
};
