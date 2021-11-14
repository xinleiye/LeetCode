/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let res = 0;
    const buffMap = new Map();

    arr.forEach(num => {
        const target = num - difference;

        if (buffMap.has(target)) {
            buffMap.set(num, buffMap.get(target) + 1);
        } else {
            buffMap.set(num, 1);
        }
        res = Math.max(res, buffMap.get(num));
    });

    return res;
};
