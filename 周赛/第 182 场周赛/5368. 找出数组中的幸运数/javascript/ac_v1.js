/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let res = -1;
    let arrMap = new Map();

    for (let num of arr) {
        if (arrMap.has(num)) {
            arrMap.set(num, arrMap.get(num) + 1);
        } else {
            arrMap.set(num, 1);
        }
    }

    arrMap.forEach((val, key) => {
        if (val === key) {
            res = Math.max(res, val);
        }
    });

    return res;
};
