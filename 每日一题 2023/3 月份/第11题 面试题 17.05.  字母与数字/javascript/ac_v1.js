/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function(array) {
    const res = [];
    const diffMap = new Map();
    const total = array.length;
    let left = 0;
    let right = 0;
    let diff = 0;

    diffMap.set(0, -1);
    for (let i = 0; i < total; i++) {
        if (isNaN(array[i])) {
            diff++;
        } else {
            diff--;
        }
        if (diffMap.has(diff)) {
            const start = diffMap.get(diff);

            if (i - start > right - left + 1) {
                left = start + 1;
                right = i;
            }
        } else {
            diffMap.set(diff, i);
        }
    }
    if (left === right) {
        return res;
    }
    for (let i = left; i <= right; i++) {
        res.push(array[i]);
    }

    return res;
};
