/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const total = nums.length;
    const res = new Array(total);

    for (let i = 0; i < total; i++) {
        res[i] = (nums[i] % 2 === 1) ? getNumBit(nums[i]) : -1;
    }

    return res;
};

function getNumBit(num) {
    let bit = 1;

    while (num & bit) {
        bit = bit << 1;
    }

    return num & ~(bit >>> 1);
}
