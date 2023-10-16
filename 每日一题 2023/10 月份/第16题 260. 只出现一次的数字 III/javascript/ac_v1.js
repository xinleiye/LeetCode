/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorSum = 0;
    for (const n of nums) {
        xorSum ^= n;
    }

    const lsb = xorSum & (-xorSum);
    let typel1 = 0;
    let typel0 = 0;
    for (const n of nums) {
        if (n & lsb) {
            typel1 ^= n;
        } else {
            typel0 ^= n;
        }
    }

    return [typel0, typel1];
};
