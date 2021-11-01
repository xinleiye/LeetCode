/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorSum = 0;

    nums.forEach(num => {
        xorSum ^= num;
    });

    const lsb = xorSum & (-xorSum);
    let typel1 = 0;
    let typel0 = 0;

    nums.forEach(num => {
        if (num & lsb) {
            typel1 ^= num;
        } else {
            typel0 ^= num;
        }
    });

    return [typel0, typel1];
};
