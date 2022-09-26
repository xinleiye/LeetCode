/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
    let xorSum = 0;
    const total = nums.length + 2;
    for (const n of nums) {
        xorSum ^= n;
    }
    for (let i = 1; i <= total; i++) {
        xorSum ^= i;
    }

    let n1 = 0;
    let n2 = 0;
    const lsb = xorSum & (-xorSum);
    for (const n of nums) {
        if (lsb & n) {
            n1 ^= n;
        } else {
            n2 ^= n;
        }
    }
    for (let i = 1; i <= total; i++) {
        if (lsb & i) {
            n1 ^= i;
        } else {
            n2 ^= i;
        }
    }

    return [n1, n2];
};
