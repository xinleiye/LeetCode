/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let res = 1;
    let map = new Map();

    for (let item of arr) {
        if (map.has(item - difference)) {
            map.set(item, map.get(item - difference) + 1);
        } else {
            map.set(item, 1);
        }
        res = Math.max(map.get(item), res); 
    }
    return res;
};
