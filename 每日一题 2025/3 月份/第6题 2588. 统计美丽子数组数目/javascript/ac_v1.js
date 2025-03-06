/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    const xorMap = new Map();
    let xor = 0;
    let res = 0;

    xorMap.set(0, 1);
    for (const n of nums) {
        xor ^= n;
        if (xorMap.has(xor)) {
            const count = xorMap.get(xor);

            res += count
            xorMap.set(xor, count + 1);
        } else {
            xorMap.set(xor, 1);
        }
    }

    return res;
};
