/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let res = 0;
    let sum = 0;
    let arrMap = new Map();
    let count = [];

    for (let item of arr) {
        if (arrMap.has(item)) {
            arrMap.set(item, arrMap.get(item) + 1);
        } else {
            arrMap.set(item, 1);
        }
    }

    arrMap.forEach((val) => {
        count.push(val);
    });
    count.sort((val1, val2) => {
        return val2 - val1;
    });
    for (let item of count) {
        sum += item;
        res++;
        if (sum >= arr.length / 2) {
            break;
        }
    }

    return res;
};
