/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let res = 0;

    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        let bitMap = i;
        let index = 0;
        let xorSum = 0;

        while (bitMap) {
            if (bitMap & 1) {
                xorSum ^= nums[index];
            }
            bitMap = bitMap >>> 1;
            index++;
        }
        res += xorSum;
    }

    return res;
};
