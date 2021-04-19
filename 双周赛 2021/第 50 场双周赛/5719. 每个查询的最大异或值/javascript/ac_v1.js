/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
 var getMaximumXor = function(nums, maximumBit) {
    const res = new Array(nums.length);
    let xorVal = 0;
    const pow2 = new Array(maximumBit).fill(0);
    const length = nums.length;
    const getZeroBit = (num) => {
        let bit = [];

        for (let i = 0; i < maximumBit; i++) {
            if (num % 2 === 0) {
                bit.push(i);
            }
            num = num >>> 1;
        }

        return bit;
    };

    for (let i = 0; i < maximumBit; i++) {
        pow2[i] = Math.pow(2, i);
    }

    for (let i = 0; i < length; i++) {
        let k = 0;

        xorVal ^= nums[i];
        getZeroBit(xorVal).forEach(pow => {
            k += pow2[pow];
        });

        res[length - 1 - i] = k;
    }

    return res;
};
