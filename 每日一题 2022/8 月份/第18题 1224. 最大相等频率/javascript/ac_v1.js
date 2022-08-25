/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    let res = 0;
    let maxFreq = 0;
    const numFreqMap = new Map();
    const freqCountMap = new Map();
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        const num = nums[i];
        let freq = numFreqMap.has(num) ? numFreqMap.get(num) : 0;
        if (freq > 0) {
            freqCountMap.set(freq, freqCountMap.get(freq) - 1);
        }
        freq++;
        numFreqMap.set(num, freq);
        maxFreq = Math.max(maxFreq, freq);
        if (freqCountMap.has(freq)) {
            freqCountMap.set(freq, freqCountMap.get(freq) + 1);
        } else {
            freqCountMap.set(freq, 1);
        }

        const maxFreqCount = freqCountMap.get(maxFreq);
        if (maxFreq === 1 ||
            (maxFreqCount === 1 && maxFreq + freqCountMap.get(maxFreq - 1) * (maxFreq - 1) === i + 1) ||
            (maxFreqCount * maxFreq + 1 === i + 1 && freqCountMap.get(1) === 1)) {
            res = Math.max(res, i + 1);
        }
    }

    return res;
};
