/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const modP = nums.reduce((n, s) => (n + s) % p);
    if (modP === 0) {
        return 0;
    }

    let res = nums.length;
    let curMod = 0;
    const modMap = new Map();
    modMap.set(0, -1);
    nums.forEach((n, i) => {
        curMod = (curMod + n) % p;
        modMap.set(curMod, i);

        const m = (curMod - modP + p) % p;
        if (modMap.has(m)) {
            res = Math.min(res, i - modMap.get(m));
        }
    });

    return res < nums.length ? res : -1;
};
