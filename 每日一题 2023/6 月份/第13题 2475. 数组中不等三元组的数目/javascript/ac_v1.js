/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let res = 0;
    let pre = 0;
    const numMap = new Map();
    const total = nums.length;

    for (const n of nums) {
        if (numMap.has(n)) {
            numMap.set(n, numMap.get(n) + 1);
        } else {
            numMap.set(n, 1);
        }
    }
    numMap.forEach(val => {
        res += pre * val * (total - pre - val);
        pre += val;
    });

    return res;
};
