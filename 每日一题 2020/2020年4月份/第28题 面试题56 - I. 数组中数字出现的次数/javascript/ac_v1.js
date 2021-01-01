/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let num1 = 0;
    let num2 = 0;
    let xorSum = 0;
    let lowBit = 1;

    nums.forEach(val => {
        xorSum ^= val;
    });

    while ((lowBit & xorSum) === 0) {
        lowBit = lowBit << 1;
    }

    nums.forEach(val => {
        if (val & lowBit) {
            num1 ^= val;
        } else {
            num2 ^= val;
        }
    });

    return [num1, num2];
};
