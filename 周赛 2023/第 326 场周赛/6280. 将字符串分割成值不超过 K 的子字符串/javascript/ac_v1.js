/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let preNum = 0;
    let nums = [];

    for (const n of s) {
        const num = Number(n);
        if (num > k) {
            return -1;
        }

        const curNum = preNum * 10 + num;
        if (curNum > k) {
            nums.push(preNum);
            preNum = num;
        } else {
            preNum = curNum;
        }
    }
    if (preNum <= k) {
        nums.push(preNum);
    } else {
        return -1;
    }

    return nums.length;
};
