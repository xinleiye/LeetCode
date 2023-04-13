/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let res = -1;
    let maxCount = 0;
    const numMap = new Map();

    for (const n of nums) {
        if (n % 2 === 0) {
            if (numMap.has(n)) {
                numMap.set(n, numMap.get(n) + 1);
            } else {
                numMap.set(n, 1);
            }
        }
    }
    numMap.forEach((count, num) => {
        if (count > maxCount) {
            res = num;
            maxCount = count;
        } else if (count === maxCount) {
            res = Math.min(res, num);
        }
    });

    return res;
};
