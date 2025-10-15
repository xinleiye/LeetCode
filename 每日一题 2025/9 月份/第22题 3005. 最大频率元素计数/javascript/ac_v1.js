/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Array(101).fill(0);
    let res = 0;
    let maxFreq = 0;

    for (const n of nums) {
        freq[n]++;
    }
    for (const f of freq) {
        if (f > maxFreq) {
            res = f;
            maxFreq = f;
        } else if (f === maxFreq) {
            res += f;
        }
    }

    return res;
};
