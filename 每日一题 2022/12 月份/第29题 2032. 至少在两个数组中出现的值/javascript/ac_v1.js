/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const MAX_NUM = 100;
    const numCounter = new Array(MAX_NUM + 1).fill(0);
    const res = [];
    const countNum = (tar, nums) => {
        const numArr = new Array(MAX_NUM + 1).fill(0);

        for (const n of nums) {
            if (numArr[n] < 1) {
                numArr[n]++;
            }
        }
        for (let i = 1; i <= MAX_NUM; i++) {
            tar[i] += numArr[i];
        }
    };

    countNum(numCounter, nums1);
    countNum(numCounter, nums2);
    countNum(numCounter, nums3);
    for (let i = 1; i <= MAX_NUM; i++) {
        if (numCounter[i] >= 2) {
            res.push(i);
        }
    }

    return res;
};
