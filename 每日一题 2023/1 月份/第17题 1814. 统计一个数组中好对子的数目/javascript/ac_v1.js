/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const MOD = 1e9 + 7;
    const calcRev = (num) => {
        let n = 0;

        while (num) {
            n = n * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        return n;
    };
    let res = 0;
    const diffMap = new Map();

    for (const n of nums) {
        const diff = n - calcRev(n);

        if (diffMap.has(diff)) {
            const count = diffMap.get(diff);

            res = (res + count) % MOD;
            diffMap.set(diff, count + 1);
        } else {
            diffMap.set(diff, 1);
        }
    }

    return res;
};
