/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const numMap = new Map();
    const numSet = new Set();
    let res = 0;

    for (const n of nums) {
        const rest = n % value;
        const num = rest < 0 ? ((rest + value) % value) : rest % value;

        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    }
    numMap.forEach((count, key) => {
        for (let i = 0; i < count; i++) {
            numSet.add(key + value * i);
        }
    });
    while (numSet.has(res)) {
        res++;
    }

    return res;
};
