/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let res = 0;
    const bitCount = new Array(32).fill(0);

    for (let n of nums) {
        let pos = 0;

        while (n) {
            if (n & 1) {
                bitCount[pos]++;
            }
            n = n >>> 1;
            pos++;
        }
    }
    for (let i = 0; i < 32; i++) {
        if (bitCount[i] >= k) {
            res += Math.pow(2, i);
        }
    }

    return res;
};
