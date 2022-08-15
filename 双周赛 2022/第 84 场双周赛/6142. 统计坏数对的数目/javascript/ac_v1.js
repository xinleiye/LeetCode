/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const total = nums.length;
    const goodPairMap = new Map();
    let res = total * (total - 1) / 2;

    for (let i = 0; i < total; i++) {
        const diff = nums[i] - i;

        if (goodPairMap.has(diff)) {
            const pairs = goodPairMap.get(diff);

            res -= pairs;
            goodPairMap.set(diff, pairs + 1);
        } else {
            goodPairMap.set(diff, 1);
        }
    }

    return res;
};
