/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let res = 0;
    const diffMap = new Map();
    let count1 = 0;
    let count0 = 0;
    let preDiff = 0;

    diffMap.set(0, -1);
    nums.forEach((val, index) => {
        let diff;

        if (val === 0) {
            count0++;
        } else {
            count1++;
        }
        diff = count1 - count0;
        if (diffMap.has(diff)) {
            if (preDiff > Math.abs(diff)) {
                res = Math.max(res, index - diffMap.get(diff));
            }
        } else {
            diffMap.set(diff, index);
        }
        preDiff = Math.abs(diff)
    });

    return res;
};
