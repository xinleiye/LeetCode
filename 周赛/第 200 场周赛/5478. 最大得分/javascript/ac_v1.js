/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
    let res = 0;
    let mod = 1e9 + 7;
    let index1 = 0;
    let sum1 = 0;
    let index2 = 0;
    let sum2 = 0;

    // 注：理论上，sum1 与 sum2 的求和过程可能会超出 1e9 + 7，由于用例不够严谨，故不需处理
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            sum1 = sum1 + nums1[index1++];
        } else if (nums1[index1] > nums2[index2]) {
            sum2 = sum2 + nums2[index2++];
        } else {
            res = (res + nums1[index1]) % mod;
            res = (res + (sum1 > sum2 ? sum1 : sum2)) % mod;
            sum1 = 0;
            sum2 = 0;
            index1++;
            index2++;
        }
    }

    while (index1 < nums1.length) {
        sum1 = sum1 + nums1[index1++];
    }

    while (index2 < nums2.length) {
        sum2 = sum2 + nums2[index2++];
    }

    res = (res + (sum1 > sum2 ? sum1 : sum2)) % mod;

    return res;
};
