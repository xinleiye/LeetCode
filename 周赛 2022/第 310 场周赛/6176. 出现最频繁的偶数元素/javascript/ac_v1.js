/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let res = -1;
    let max = 0;
    const numMap = new Map();
    
    for (const n of nums) {
        if (numMap.has(n)) {
            numMap.set(n, numMap.get(n) + 1);
        } else {
            numMap.set(n, 1);
        }
    }

    numMap.forEach((count, num) => {
        if (num % 2 === 0) {
            if (count > max) {
                res = num;
                max = count;
            } else if (count === max) {
                res = Math.min(res, num);
            }
        }
    });
    
    return res;
};
