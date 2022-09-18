/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const res = new Array(nums.length);
    const bitsIndex = new Array(32).fill(-1);
    const getBits = (n) => {
        let bits = new Array(32).fill(false);
        let pos = 0;

        while (n) {
            if (n & 1) {
                bits[31 - pos] = true;
            }
            n = n >>> 1;
            pos++;
        }

        return bits;
    };

    for (let i = nums.length - 1; i >= 0; i--) {
        const bits = getBits(nums[i]);
        let maxBitsIndex = -1;

        for (let j = 0; j < 32; j++) {
            if (bits[j]) {
                bitsIndex[j] = i;
            }
            maxBitsIndex = Math.max(maxBitsIndex, bitsIndex[j]);
        }

        res[i] = maxBitsIndex !== -1 ? maxBitsIndex - i + 1 : 1;
    }

    return res;
};
