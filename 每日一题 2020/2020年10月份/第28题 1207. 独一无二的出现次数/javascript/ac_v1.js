/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let res = true;
    let countMap = new Map();
    let countSet = new Set();

    arr.forEach(val => {
        if (countMap.has(val)) {
            countMap.set(val, countMap.get(val) + 1);
        } else {
            countMap.set(val, 1);
        }
    });

    countMap.forEach(val => {
        if (res) {
            if (countSet.has(val)) {
                res = false;
            } else {
                countSet.add(val);
            }
        }
    });

    return res;
};
