/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const total = nums.length;
    let res = total * (total - 1) / 2;
    const diffMap = new Map();

    for (let i = 0; i < total; i++) {
        const diff = nums[i] - i;

        if (diffMap.has(diff)) {
            const count = diffMap.get(diff);

            res -= count;
            diffMap.set(diff, count + 1);
        } else {
            diffMap.set(diff, 1);
        }
    }

    return res;
};
